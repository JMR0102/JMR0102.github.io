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