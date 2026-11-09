# DerpFest Custom ROM — Xiaomi Pad 6 (`pipa`)
### Liquid Glass UI & iPadOS Split Control Center Edition

This repository contains the complete customization suite, device trees manifest, system patches, automated cloud CI/CD build workflows, and **ready-to-flash Recovery / Magisk ZIP package** for the **Xiaomi Pad 6 (`pipa`)**.

---

## 📦 Flashable Zip Package (Immediate Installation)

The flashable zip is ready in the repository at:
`release/DerpFest-LiquidGlass-iPadOS-Pad6-pipa.zip`

### How to Flash on Xiaomi Pad 6:

#### Option A: Flash via OrangeFox / TWRP Recovery
1. Transfer `DerpFest-LiquidGlass-iPadOS-Pad6-pipa.zip` to your Xiaomi Pad 6 storage or a USB-OTG drive.
2. Boot your Xiaomi Pad 6 into OrangeFox or TWRP recovery.
3. Tap **Install** -> Select `DerpFest-LiquidGlass-iPadOS-Pad6-pipa.zip`.
4. Swipe to confirm flash.
5. Wipe Dalvik/Cache and Reboot System.

#### Option B: Flash via Magisk App
1. Open the **Magisk** app on your Xiaomi Pad 6.
2. Go to the **Modules** tab.
3. Tap **Install from storage** -> Select `DerpFest-LiquidGlass-iPadOS-Pad6-pipa.zip`.
4. Once installation completes, tap **Reboot**.

---

## 🌟 Key Customizations Included

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

### 4. 144Hz Smoothness Persistence
- Configured display props and SurfaceFlinger configs to prevent refresh rate dropping down to 60Hz when opening Quick Settings or the Settings app.

---

## 📁 Repository Structure

```
├── release/
│   └── DerpFest-LiquidGlass-iPadOS-Pad6-pipa.zip   # Flashable TWRP / Magisk package
├── .github/
│   └── workflows/
│       └── build-rom.yml          # Automated GitHub Actions workflow to build & release full ROM
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
    └── build.sh                   # Full ROM source compilation script
```
