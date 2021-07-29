#!/bin/sh

sed -i '/Ultrasnap:/d' ~/.config/kglobalshortcutsrc
plasmapkg2 --type=kwinscript -r .
zip -r ultrasnap.kwinscript contents/ metadata.desktop
plasmapkg2 --type=kwinscript -i .
kwin_x11 --replace &
