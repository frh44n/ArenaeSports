SKIPMOUNT=false
PROPFILE=true
POSTFSDATA=false
LATESTARTSERVICE=false

print_modname() {
  ui_print "****************************************************"
  ui_print "*   DerpFest Liquid Glass & iPadOS Control Center  *"
  ui_print "*             for Xiaomi Pad 6 (pipa)              *"
  ui_print "****************************************************"
}

on_install() {
  ui_print "- Installing Liquid Glass RRO Overlays..."
  ui_print "  * LiquidGlassFrameworkOverlay.apk"
  ui_print "  * LiquidGlassSystemUIOverlay.apk"
  ui_print "  * LiquidGlassSettingsOverlay.apk"

  ui_print "- Applying 144Hz high refresh rate persistence..."
  ui_print "- Applying rapid rotation stabilization..."

  set_perm_recursive "$MODPATH/system/product/overlay" 0 0 0755 0644
}

set_permissions() {
  set_perm_recursive "$MODPATH" 0 0 0755 0644
}
