# DerpFest Custom ROM — Xiaomi Pad 6 (`pipa`)
### Liquid Glass UI & iPadOS Split Control Center Edition

This repository contains the complete customization suite, device trees manifest, system patches, and automated cloud CI/CD build workflows for compiling **DerpFest OS** for the **Xiaomi Pad 6 (`pipa`)**.

---

## 🌟 Key Customizations

### 1. iPadOS-Style Split Quick Settings (Control Center)
- **Split Gesture Interaction**:
  - **Top-Right Pulldown**: Opens the modular iPadOS-style Control Center.
  - **Top-Left / Center Pulldown**: Opens the Notification Shade.
- **Modular Layout**:
  - 2x2 Connectivity Matrix (Wi-Fi, Bluetooth, Airplane Mode, Cellular Data).
  - Vertical hardware sliders for Brightness and Volume with smooth fluid physics.
  - 2x2 Now Playing Media Player card.
  - Action toggles for Auto-Rotation, Flashlight, DND, etc.

### 2. System-Wide Liquid Glass Theme (Hardware-Accelerated)
- Hardware-accelerated Skia RenderEffect blur (`config_windowBlursSupported = true`).
- Glassmorphism design across:
  - **Quick Settings & Control Center**
  - **Notification Cards & Scrim**
  - **Settings App** (translucent frosted card layouts)
  - **Volume & Power Dialogs**
  - **Lockscreen Widgets**

### 3. Rapid Multi-Rotation Fix
- **Wallpaper Fallback Elimination**: Patched `WallpaperManagerService` with a 2500ms orientation debounce to prevent false-positive consecutive crash-loop triggers when rapidly rotating between portrait and landscape.
- **Launcher3 Workspace Guard**: Guarded `InvariantDeviceProfile` against transient `0x0` screen bounds during rapid rotation transitions, preventing workspace and wallpaper resets.

---

## 📁 Repository Structure

```
├── .github/
│   └── workflows/
│       └── build-rom.yml          # Automated GitHub Actions workflow to build & release ROM
├── manifests/
│   └── pipa.xml                   # Local manifest for Xiaomi Pad 6 (device, vendor, kernel)
├── overlays/
│   ├── LiquidGlassFramework/      # Window blur, radius, and color tokens
│   ├── LiquidGlassSystemUI/       # Control center & notification frosted glass assets
│   └── LiquidGlassSettings/       # Glass card overlays for Settings app
├── patches/
│   ├── frameworks_base/           # iPadOS Control Center & WallpaperManagerService patches
│   └── packages_apps_Launcher3/   # Rapid rotation IDP & workspace stabilization patch
└── scripts/
    └── build.sh                   # One-click build script
```

---

## 🚀 How to Build

### Option 1: Automated Cloud Build via GitHub Actions
1. Fork or push this repository to your GitHub.
2. Go to the **Actions** tab on your repository.
3. Select **Build DerpFest Custom ROM (Xiaomi Pad 6)** and click **Run workflow**.
4. The workflow will sync the sources, apply the liquid glass and iPadOS patches, compile the ROM, and publish the flashable `.zip` to **GitHub Releases**.

### Option 2: Local / Server Compilation
Run the one-click build script on any Linux build server:

```bash
git clone https://github.com/frh44n/ArenaeSports.git derpfest-pipa
cd derpfest-pipa
bash scripts/build.sh
```

The completed ROM zip will be located in `out/target/product/pipa/`.
