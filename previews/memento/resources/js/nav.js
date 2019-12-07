$(function() {
    $('.full-nav-content').append($('.header > .header-container > .header-content > .nav-container').html());

    if($('.header').position().top == 0) {
        // console.log($('.full-nav > .full-nav-container > .full-nav-content').css('padding-top'));
        // console.log(parseInt($('.full-nav > .full-nav-container > .full-nav-content').css('padding-top'), 10) + $('.header').outerHeight());
        $('.full-nav-content').css('padding-top', (parseInt($('.full-nav > .full-nav-container > .full-nav-content').css('padding-top'), 10) + $('.header').outerHeight()));
        // $('.full-nav > .full-nav-content > .full-nav-content').css('padding-top', (parseInt($('.full-nav > .full-nav-container > .full-nav-content').css('padding-top'), 10) + $('.header').outerWidth()));
    };

    $('.nav-menu').click(function() { navToggle(); });
});



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