SKIPMOUNT=false
PROPFILE=true
POSTFSDATA=false
LATESTARTSERVICE=true

print_modname() {
  ui_print "****************************************************"
  ui_print "*   DerpFest Liquid Glass & 144Hz Optimizer        *"
  ui_print "*             for Xiaomi Pad 6 (pipa)              *"
  ui_print "****************************************************"
}

on_install() {
  ui_print "- Configuring hardware-accelerated Liquid Glass blurs..."
  ui_print "- Locking refresh rate at 144Hz across UI & Settings..."
  ui_print "- Applying rapid rotation debounce protection..."

  set_perm "$MODPATH/service.d/liquid_glass_tweaks.sh" 0 0 0755
}

set_permissions() {
  set_perm_recursive "$MODPATH" 0 0 0755 0644
  set_perm "$MODPATH/service.d/liquid_glass_tweaks.sh" 0 0 0755
}
