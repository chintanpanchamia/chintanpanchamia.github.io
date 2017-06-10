/*!
    Title: Dev Portfolio Template
    Version: 1.2.0
    Last Change: 05/20/17
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');



    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });





    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });




    $(document).ready(function() {
        $(".top-button").hide();

        // Animate to section when nav is clicked
        $("a").click(function () {
                $('html, body').animate({
                    scrollTop: ($($.attr(this, 'href')).offset().top - 50)
                }, 500);
                return false;
        });


        var aChildren = $('.navbar-default .navbar-nav li').children();
        var aArray = [];
        for(var i = 0; i < aChildren.length; i++)
        {
            var aChild = aChildren[i];
            var aHref = $(aChild).attr('href');
            aArray.push(aHref);
        }






        $(window).on("scroll", function () {


            if ($(this).scrollTop() > window.innerHeight - 70) {
                $(".top-button").fadeIn();
            }
            else {
                $(".top-button").fadeOut();
            }



            var windowPos = $(window).scrollTop();


            for(var i = 0; i < aArray.length; i++)
            {
                var theID = aArray[i];
                var divPos = $(theID).offset().top - 70;
                var divHeight = $(theID).height();

                if(windowPos >= divPos && windowPos < (divPos + divHeight))
                {
                    $('a[href="' + theID + '"]').parent().addClass('active');
                }
                else
                {
                    $('a[href="' + theID + '"]').parent().removeClass('active');
                }

                if($(window).scrollTop() == ($(document).height() - $(window).height()))
                {
                    $('a[href="' + theID + '"]').parent().removeClass('active');
                    $('a[href="' + aArray[aArray.length - 1] + '"]').parent().addClass('active');
                }
                else
                {
                    $('a[href="' + aArray[aArray.length - 1] + '"]').parent().removeClass('active');
                }
            }


        });

    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: (scrollDistance - 40)
        }, 500);
    });






})(jQuery);
