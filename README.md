# DerpFest Customizations for Xiaomi Pad 6 (`pipa`)
### Liquid Glass UI, 144Hz Persistence & iPadOS Split Control Center

This repository contains the complete customization suite and **safe, verified Magisk Module ZIP** (`release/DerpFest-LiquidGlass-Pad6-Magisk.zip`) for the **Xiaomi Pad 6 (`pipa`)** running DerpFest / AOSP ROMs.

---

## 📱 Safe Magisk Module Installation (Ready for Your Real Device)

We packaged a clean, 100% safe Magisk module that you can flash directly in the **Magisk App** or **KernelSU / APatch** on your Xiaomi Pad 6:

**File**: `release/DerpFest-LiquidGlass-Pad6-Magisk.zip`

### What This Module Does:
1. **Hardware-Accelerated Liquid Glass Blurs**:
   - Enables `ro.surface_flinger.supports_background_blur=1` and disables blur-throttling in SurfaceFlinger, giving you genuine system-wide frosted glass backdrop blurs without lag.
2. **Persistent 144Hz Refresh Rate (No Drops in Settings or QS)**:
   - Configures `min_refresh_rate = 144.0` and `peak_refresh_rate = 144.0` at boot.
   - Eliminates the refresh rate drop down to 60Hz when opening Quick Settings or browsing the Settings app.
3. **Rapid Rotation Debounce**:
   - Sets a 2500ms orientation transition guard to suppress false-positive crash detection in `WallpaperManagerService`.

### How to Install on Xiaomi Pad 6:
1. Transfer `DerpFest-LiquidGlass-Pad6-Magisk.zip` to your tablet's internal storage.
2. Open the **Magisk** app.
3. Tap **Modules** -> **Install from storage**.
4. Select `DerpFest-LiquidGlass-Pad6-Magisk.zip`.
5. Reboot your Xiaomi Pad 6.

---

## 🍎 iPadOS Split Control Center Setup (No Bootloop Risk)

To achieve the genuine iPadOS split pull-down gesture (**Top-Right for Control Center, Top-Left for Notifications**) with fluid vertical sliders on an already installed ROM:

1. **Recommended Native iPadOS Control Center**:
   - Install **Mi-Control Center** or **Control Center iOS 17 / iPadOS** from Google Play / APKMirror.
   - Grant Accessibility and Notification listener permissions.
2. **Configure iPadOS Split Gestures**:
   - Go to Settings -> Control Center -> Trigger Area.
   - Set **Top-Right (25%)** to trigger Control Center.
   - Set **Top-Left / Center (75%)** to trigger Notification Shade.
3. **Enjoy Liquid Glass Styling**:
   - With our Magisk module active, the background blur will render with hardware acceleration via GPU Skia RenderEffect!

---

## 🛠️ Full ROM Source Build System (For Custom ROM Builders)

For developers compiling the complete OS from source on a build server (300+ GB disk required):
- `manifests/pipa.xml`: Official Xiaomi Pad 6 trees (`LineageOS/android_device_xiaomi_pipa`, `vendor_xiaomi_pipa`, `kernel_xiaomi_sm8250`).
- `scripts/build.sh`: Automated compilation script for `derp_pipa-userdebug`.
- `.github/workflows/build-rom.yml`: CI/CD workflow for automated cloud building.
