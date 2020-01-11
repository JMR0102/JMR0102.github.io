$(function() {
    $('.article-title').each(function(i, v) {
        var text = $(this).text();
        var html = $(this).html();
        var words = text.split(' ');
        var reg = new RegExp(/[A-Z]/g);
        var match = html.match(reg);

        // text = html.replace(/([A-Z])/g, '\u00AD$1').trim();
        text = html.replace(/([A-Z])/g, '<span class="hyphen">&shy;</span>$1').trim();

        $(this).html(text);
    });

    $('.article-title:contains("-")').html(function(_, html) {
        // return html.replace(/(-)/g, '<span class="hyphen">$1</span>');
        return html.replace(/(-)/g, ' ');
    });

    // $('.article-title').each(function() {
    //     var html = $(this).html();
    //     var newHTML = html.replace(/\u00AD/gi, '<span class="hyphen">-</span>');
    //     $(this).html(newHTML);
    // });
});