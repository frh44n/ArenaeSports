#!/usr/bin/env bash
set -e

# DerpFest ROM Build Script for Xiaomi Pad 6 (pipa)
# With Liquid Glass UI & iPadOS Split Control Center

DEVICE="pipa"
BRANCH="14"
WORKSPACE_DIR="${WORKSPACE_DIR:-$HOME/derpfest}"
PATCHES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/patches"
OVERLAYS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/overlays"
MANIFEST_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/manifests"

echo "=========================================================="
echo " Starting DerpFest Build for Xiaomi Pad 6 ($DEVICE)       "
echo " Features: Liquid Glass UI + iPadOS Control Center + Fixes"
echo "=========================================================="

mkdir -p "$WORKSPACE_DIR"
cd "$WORKSPACE_DIR"

# 1. Initialize Repo if not already initialized
if [ ! -d ".repo" ]; then
    echo "==> Initializing DerpFest repo..."
    repo init -u https://github.com/DerpFest-AOSP/manifest.git -b "$BRANCH" --depth=1
fi

# 2. Copy Local Manifest
echo "==> Setting up local manifest for $DEVICE..."
mkdir -p .repo/local_manifests
cp "$MANIFEST_DIR/pipa.xml" .repo/local_manifests/pipa.xml

# 3. Sync source repositories
echo "==> Syncing repositories (this may take time)..."
repo sync -c -j"$(nproc --all)" --force-sync --no-clone-bundle --no-tags

# 4. Apply Customizations & Patches
echo "==> Applying Liquid Glass & iPadOS Control Center patches..."
if [ -d "frameworks/base" ]; then
    cd frameworks/base
    git apply "$PATCHES_DIR/frameworks_base/0001-SystemUI-Add-iPadOS-style-split-shade-Control-Center.patch" || true
    git apply "$PATCHES_DIR/frameworks_base/0002-WallpaperManagerService-Prevent-wallpaper-fallback-reset-on-rapid-rotation.patch" || true
    cd ../..
fi

if [ -d "packages/apps/Launcher3" ]; then
    cd packages/apps/Launcher3
    git apply "$PATCHES_DIR/packages_apps_Launcher3/0001-Launcher3-Guard-against-workspace-grid-reset-during-rapid-rotation.patch" || true
    cd ../../..
fi

# 5. Copy Liquid Glass Resource Overlays
echo "==> Installing Liquid Glass RRO packages..."
mkdir -p vendor/derp/overlay/liquidglass
cp -r "$OVERLAYS_DIR"/* vendor/derp/overlay/liquidglass/

# 6. Setup Build Environment
echo "==> Setting up environment..."
source build/envsetup.sh
lunch derp_"$DEVICE"-userdebug

# 7. Start Compilation
echo "==> Starting ROM compilation..."
mka derp -j"$(nproc --all)"

echo "=========================================================="
echo " Build Completed Successfully!                            "
echo " Output zip located in out/target/product/$DEVICE/        "
echo "=========================================================="
