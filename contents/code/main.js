function snap(position, count, slots) {
    position --;
    var client = workspace.activeClient;
    if (client.moveable) {

        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var slot_w = Math.floor(maxArea.width / slots);  // width of a single slot
        var win_w = slot_w * count;
        
        var x = maxArea.x + (slot_w * position);
        var h = maxArea.height;
        var y = maxArea.y;
        client.geometry = {
            x: x,
            y: y,
            width: win_w,
            height: h
        };

        client.setMaximize(false,false);
    }
}


registerShortcut("SnapLeft1-3", "Ultrasnap: Move to left 1/3", "Meta+Num+7", function() {
    snap(1, 1, 3);
});

registerShortcut("SnapMid1-3", "Ultrasnap: Move to middle 1/3", "Meta+Num+8", function() {
    snap(2, 1, 3);
});

registerShortcut("SnapRight1-3", "Ultrasnap: Move to right 1/3", "Meta+Num+9", function() {
    snap(3, 1, 3);
});


registerShortcut("SnapLeft1-4", "Ultrasnap: Move to left 1/4", "Meta+Num+4", function() {
    snap(1, 1, 4);
});

registerShortcut("SnapMid2-4", "Ultrasnap: Move to middle 2/4", "Meta+Num+5", function() {
    snap(2, 2, 4);
});

registerShortcut("SnapRight1-4", "Ultrasnap: Move to right 1/4", "Meta+Num+6", function() {
    snap(4, 1, 4);
});

