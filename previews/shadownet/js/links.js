$(function() {
    const protocol = window.location.protocol;
    const host = window.location.host;
    
    $('.same-domain').each(function(i, v) {
        var path = $(this).attr('href');
        var url = protocol+'//'+host+'/'+path;

        $(this).attr('href', url);
    });
});