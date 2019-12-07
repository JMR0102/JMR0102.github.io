function jmrBreakpoints(device) {
    var devices = {
        'for-mobile-only' : { min_width : '0', max_width : '599' },
        'for-tablet-portrait-up' : { min_width : '600', max_width : '1000000' },
        'for-tablet-portrait-only' : { min_width : '600', max_width : '899' },
        'for-tablet-landscape-up' : { min_width : '900', max_width : '1000000' },
        'for-tablet-landscape-only' : { min_width : '900', max_width : '1199' },
        'for-desktop-up' : { min_width : '1200', max_width : '1000000' },
        'for-desktop-only' : { min_width : '1200', max_width : '1799' },
        'for-big-desktop-up' : { min_width : '1800', max_width : '1000000' }
    };

    if(($(window).width() >= devices[device].min_width) && ($(window).width() <= devices[device].max_width)) {
        return true;
    } else {
        return false;
    };
};