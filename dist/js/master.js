$(document).ready(function(){
    new WOW().init();

    var $document = $(document),
    $element = $('header'),
    className = 'fixed',
    $isMobile = window.innerWidth < 996;

    //scroll fixed header
    $document.scroll(function () {
        if ($document.scrollTop() >= window.innerHeight) {
            // user scrolled 50 pixels or more;
            // do stuff
            $element.addClass(className);
            $element.find('.navbar-dark').removeClass('bg-transparent')
        } else {
            $element.removeClass(className);
        }
    });

    //anchor
    $('.navbar a[href*="#"]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
                scrollTop: $(target).offset().top-60
        }, 600, function() {
                location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });

    //back to top
    if ($('#back-to-top, #inicio').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top, #inicio').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });

        //current year
        var date = new Date();
        var currentYear = date.getFullYear();
        $('.current-year').text(currentYear);
    }

    //menu active
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
    
        // Show/hide menu on scroll
        //if (scrollDistance >= 850) {
        //		$('nav').fadeIn("fast");
        //} else {
        //		$('nav').fadeOut("fast");
        //}
    
        // Assign active class to nav links while scolling
        $('main section').each(function(i) {
            if ($(this).position().top-160 <= scrollDistance) {
                $('.navbar-nav li.active').removeClass('active');
                $('.navbar-nav li').eq(i).addClass('active');
            }
        });
    }).scroll();

})

