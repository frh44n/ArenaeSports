#!/system/bin/sh
# Wait until system boot finishes
until [ "$(getprop sys.boot_completed)" = "1" ]; do
  sleep 2
done

# 1. Force Peak Refresh Rate to 144Hz across all apps (prevents drop in Settings / QS)
settings put system min_refresh_rate 144.0 2>/dev/null || true
settings put system peak_refresh_rate 144.0 2>/dev/null || true
settings put global user_refresh_rate 144 2>/dev/null || true

# 2. Disable Blur Throttling in SurfaceFlinger
setprop persist.sys.sf.disable_blurs 0 2>/dev/null || true

# 3. Stabilize Device Orientation Changes
settings put system accelerometer_rotation_debounce 2500 2>/dev/null || true
