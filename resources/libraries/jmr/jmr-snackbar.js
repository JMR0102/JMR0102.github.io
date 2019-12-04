function jmrSnackbar(title, content) {
    var html = [];

    html.push('<div class="jmr-snackbar">');
    html.push('<h1 class="jmr-snackbar-title">'+title+'</h1>');
    html.push('<p class="jmr-snackbar-content">'+content+'</p>');
    html.push('</div>');

    $('body').append(html.join(''));


    
    $('.jmr-snackbar').css('top', $(window).outerHeight());
    $('.jmr-snackbar').animate({ top: $(window).outerHeight() - 100, opacity: 1 }, 600);
    
    setTimeout(function() {
        $('.jmr-snackbar').animate({ top: $(window).outerHeight(), opacity: 0 }, 600, function() { $(this).remove(); });
    }, 3000);
};