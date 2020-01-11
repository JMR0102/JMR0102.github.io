$(function() {
    headerToggle();
});



$(window).scroll(function() {
    headerToggle();
});



function headerToggle() {
    // if($(window).scrollTop() >= $(window).height()) {
    if($(window).scrollTop() >= ($(window).height() - 80)) {
        $('.header').slideDown(200);
    } else {
        $('.header').slideUp(200);
    };
};