$(function() {
    jmrSitePreview_buttons();

    $('.jmrSitePreview-buttons-container').css('position', 'fixed');

    $('.jmrSitePreview-buttons-container').css({
        'position' : 'fixed',
        'top' : '50%',
        'left' : '0',
        'display' : 'flex',
        'flex-flow' : 'column',
        'background-color' : 'white'
    });

    $('.jmrSitePreview-button').css({
        'padding' : '10px',
        'border' : '2px solid black',
        'border-top' : 'none'
    });

    $('.jmrSitePreview-button:first-child').css({
        'border-top-left-radius' : '2px',
        'border-top-right-radius' : '2px',
        'border-top' : '2px solid black'
    });

    $('.jmrSitePreview-button:last-child').css({
        'border-bottom-left-radius' : '2px',
        'border-bottom-right-radius' : '2px'
    });
});



function jmrSitePreview_buttons() {
    var html = [];

    html.push('<div class="jmrSitePreview-buttons-container">');
    html.push('<i class="jmrSitePreview-button fa-fw fa-2x far fa-desktop" onclick="jmrSitePreview_desktop();"></i>');
    html.push('<i class="jmrSitePreview-button fa-fw fa-2x far fa-tablet" onclick="jmrSitePreview_tablet();"></i>');
    html.push('<i class="jmrSitePreview-button fa-fw fa-2x far fa-mobile" onclick="jmrSitePreview_mobile();"></i>');
    html.push('</div>');
    
    $('body').prepend(html.join(''));
};

function jmrSitePreview_desktop() {
    $('meta[name=viewport]').attr('content', 'width=1920');
};

function jmrSitePreview_tablet() {
    $('meta[name=viewport]').attr('content', 'width=1024');
};

function jmrSitePreview_mobile() {
    $('meta[name=viewport]').attr('content', 'width=320');
};