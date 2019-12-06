$(function() {
    setInterval(function() { $('.jmr-date').text(jmrDate()); $('.jmr-time').text(jmrTime()); }, 500);
});



function jmrDate() {
    var dt = new Date();

    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    var d = dt.getDate();
    var m = dt.getMonth();
    var y = dt.getFullYear();

    if(d > 3 && d < 21) d = d+'th';
    switch(d % 10) {
        case 1: d = d+'st';
            break;
        case 2: d = d+'nd';
            break;
        case 3: d = d+'rd';
            break;
    };

    var day = days[dt.getDay()];
    var month = months[dt.getMonth()];

    var date = day+', '+d+' of '+month;



    return date;
};

function jmrTime() {
    var dt = new Date();

    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    var ms = dt.getMilliseconds();
    var ampm = h >= 12 ? 'pm' : 'am';

    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0'+m : m;

    var time = h+':'+m+' '+ampm;



    return time;
};