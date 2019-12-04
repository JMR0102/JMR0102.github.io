function logDate() {
    var dt = new Date();

    var days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];

    var d = dt.getDate();
    var y = dt.getFullYear();

    d = d < 10 ? '0'+d : d;



    var months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    var ms = dt.getMilliseconds();

    h = h < 10 ? '0'+h : h;
    m = m < 10 ? '0'+m : m;
    s = s < 10 ? '0'+s : s;
    ms = ms < 10 ? '0'+ms : ms;
    ms = ms < 100 ? '0'+ms : ms;



    // var date = '['+days[dt.getDay()]+' '+months[dt.getMonth()]+' '+d+' '+h+':'+m+':'+s+':'+ms+' '+y+'] ';
    var date = '['+days[dt.getDay()]+' '+months[dt.getMonth()]+' '+d+' '+y+' at '+h+':'+m+':'+s+':'+ms+'] ';



    return date;
};