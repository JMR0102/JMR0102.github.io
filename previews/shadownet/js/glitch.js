$(function() {
    // $('.nav-link').each(function() {
    //     $(this).addClass('glitchable-hover');
    // });



    // $('.nav.socials').find('.nav-item').hover(
    //     function() {
    //         $(this).find('.nav-link').html($(this).attr('data-target'));
    //     },
    //     function() {
    //         $(this).find('.nav-link').html('<i class="fa-fw fab fa-'+$(this).attr('data-target')+'"></i>');
    //     }
    // );


    
    // $('.glitchable-hover').hover(
    //     function() {
    //         $(this).attr('data-text', $(this).text());
    //         $(this).addClass('glitch');
    //     },
    //     function() {
    //         $(this).removeClass('glitch');
    //     }
    // );



    // $('.glitchable-constant').each(function() {
    //     var $this = $(this);
    //     glitchConstant($this);
    // });

    // function glitchConstant($this) {
    //     setInterval(function() {
    //         $this.attr('data-text', $this.text());
    //         $this.addClass('glitch');
    //     }, 1000);

    //     setInterval(function() {
    //         $this.removeClass('glitch');
    //     }, 1200);
    // };



    // var headerImageGlitch;
    // $('.header-sticky').find('.branding-image').hover(
    //     function() {
    //         $('.header-sticky').find('.branding-image').attr('src', '../resources/images/core/snet-logo-x2-light-glitch.jpg');
            
    //         setInterval(function() {
    //             $('.header-sticky').find('.branding-image').attr('src', '../resources/images/core/snet-logo-x2-light.png');
    //         // }, 1000);
    //         }, 200);

    //         headerImageGlitch = setInterval(function() {
    //             $('.header-sticky').find('.branding-image').attr('src', '../resources/images/core/snet-logo-x2-light-glitch.jpg');
    //         // }, 1200);
    //         }, 300);
    //     },
    //     function() {
    //         clearInterval(headerImageGlitch);
    //     }
    // );
});



$(function() {
    $('.nav-item').each(function() {
        $(this).addClass('glitchable-hover');
    });



    $('.nav.socials').find('.nav-item').hover(
        function() {
            $(this).find('.nav-link').html($(this).attr('data-target'));
        },
        function() {
            $(this).find('.nav-link').html('<i class="fa-fw fab fa-'+$(this).attr('data-target')+'"></i>');
        }
    );


    
    $('.glitchable-hover').hover(
        function() {
            $(this).find('.nav-link').attr('data-text', $(this).text());
            $(this).find('.nav-link').addClass('glitch');
        },
        function() {
            $(this).find('.nav-link').removeClass('glitch');
        }
    );



    $('.glitchable-constant').each(function() {
        var $this = $(this);
        glitchConstant($this);
    });

    function glitchConstant($this) {
        setInterval(function() {
            $this.attr('data-text', $this.text());
            $this.addClass('glitch');
        }, 1000);

        setInterval(function() {
            $this.removeClass('glitch');
        }, 1200);
    };



    var headerImageGlitch;
    // $('.header').find('.branding-image').hover(
    $('.header').find('.branding').hover(
        function() {
            $('.header').find('.branding-image').attr('src', '../images/core/snet-logo-x2-light-glitch.jpg');
            
            setInterval(function() {
                $('.header').find('.branding-image').attr('src', '../images/core/snet-logo-x2-light.png');
            // }, 1000);
            }, 200);

            headerImageGlitch = setInterval(function() {
                $('.header').find('.branding-image').attr('src', '../images/core/snet-logo-x2-light-glitch.jpg');
            // }, 1200);
            }, 300);
        },
        function() {
            clearInterval(headerImageGlitch);
        }
    );
});