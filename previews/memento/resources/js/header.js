$(function() {
    $('.full-nav-content').append($('.header > .header-container > .header-content > .nav-container').html());

    $('.nav-menu').click(function() { navToggle(); });

    headerInit();
});

$(window).resize(function() {
    headerInit();
});



function headerInit() {
    $('.header-spacing').height($('.header').outerHeight());

    $('.full-nav').css('padding-top', ($('.header').outerHeight()));

    $('.branding').width((($('.branding-logo').outerWidth() + 10) + $('.branding-name').outerWidth()));
    // $('.nav-container').width(((($(window).width() - (20 * 2)) - $('.branding').width()) - 20));
    // $('.nav-container').width(((($(window).width() - (20 * 2)) - $('.branding').width()) - 100));
    // $('.nav-container').css('display', 'flex');
};

function navToggle() {
    var nav = $('.full-nav');
    var body = $('body');

    if(nav.hasClass('toggled')) {
        body.removeClass('toggled');
        nav.removeClass('toggled');
        nav.animate({ left: '100vw'}, 200);
    } else {
        body.addClass('toggled');
        nav.addClass('toggled');
        nav.animate({ left: 0 }, 200);
    };
};