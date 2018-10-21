"use strict";
//===left menu====
$(document).ready(function() {
    $(window).on("load",function() {
        $('.preloader img').fadeOut();
        $('.preloader').fadeOut(1000);
    });

    function rareMenu() {
        var animationSpeed = 300,
            subMenuSelector = '.sub_menu';
        $(".menu-dropdown:not('.active')").find(subMenuSelector).slideUp("fast");
        $(".menu-dropdown.active").find("li:not('.active')").find(".sub-submenu").slideUp("fast");
        $('.navigation li a').on('click', function(e) {
            var $this = $(this);
            var checkElement = $this.next();
            if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                checkElement.slideUp(animationSpeed, function() {
                    checkElement.removeClass('active');
                });
                checkElement.parent("li").removeClass("active");
            } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                var parent = $this.parents('ul').first();
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('active');
                var parent_li = $this.parent("li");
                checkElement.slideDown(animationSpeed).addClass('active');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
            }
            if (checkElement.is(subMenuSelector)) {
                e.preventDefault();
            }
        });

    }
    //======left menu=======

    //hide menu in small screens
    var header = $('.header').height();
    function left_hide() {
        if ($(window).width() <= 992) {
            $(".wrapper").addClass("hide_menu");
            $(".wrapper").css("padding-top",header);
            $(".left_aside").css("top",header);
        }
    }
    left_hide();

    //Enable sidebar toggle
    $(".sidebar-toggle").on('click', function(e) {
        e.preventDefault();
        var content_height = $(".right-aside").height();
        //Toggle Menu
        $(".wrapper").toggleClass("hide_menu");
        $(".left_aside").height(content_height + "px");

        // spark resize
        setTimeout(function () {
            spark_resize();
        },200);
    });

    //leftmenu init
    rareMenu();
    // INIT popovers
    // $("[data-toggle='popover']").popover();
    $(".breadcrumb").find("li:last-child a").css('color','#536973');
    // humburgar animation
    if ($(window).width() >= 992) {
        $(".sidebar-toggle").on('click', function() {
            if ($('.wrapper').hasClass('hide_menu')) {
                $("body").find('.sidebar-toggle .first').addClass("first_after");
                $("body").find('.sidebar-toggle .second').addClass("second_after");
                $("body").find('.sidebar-toggle .third').addClass("third_after");
            } else {
                $("body").find('.sidebar-toggle .first').removeClass("first_after");
                $("body").find('.sidebar-toggle .second').removeClass("second_after");
                $("body").find('.sidebar-toggle .third').removeClass("third_after");
            }
        });
    }
    function spark_resize() {
        // start page header rightside charts js
        var barParentdiv1 = $('.sparkline_users').closest('div');
        var barCount1 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211];
        var barSpacing1 = 2;
        $(".sparkline_users").sparkline(barCount1, {
            type: 'bar',
            barWidth: (barParentdiv1.width() - (barCount1.length * barSpacing1)) / barCount1.length,
            height: '40',
            width: '100%',
            barSpacing: barSpacing1,
            barColor: '#329cff'
        });
        var barParentdiv2 = $('.sparkline_sales').closest('div');
        var barCount2 = [211, 210, 209, 210, 210, 211, 212, 210, 210, 211];
        var barSpacing2 = 2;
        $(".sparkline_sales").sparkline(barCount2, {
            type: 'bar',
            barWidth: (barParentdiv2.width() - (barCount2.length * barSpacing2)) / barCount2.length,
            height: '40',
            width: '100%',
            barSpacing: barSpacing2,
            barColor: '#f86a67'
        });
        // end page header rightside charts js
    }
    spark_resize();


    if ($(window).width() <= 992) {
        leftmenuscroll();
        $(window).resize(function() {
            leftmenuscroll();
        });
    }
    function leftmenuscroll() {
        var footer=$("footer").height();
        $('.sidebar').slimScroll({
            height: $('.sidebar').css('height', $(window).height()-header+footer + 'px' ),
            size: '5px',
            color: '#ccc'
        });
    }


    // start code for full screen
    $('.full_screen').on('click', function() {

        if (screenfull.enabled) {
            screenfull.toggle();
        }
    });
    // end code for full screen


    // start code for menu Search

    $("#menu_filter").on("focus", function() {
        $(".navigation .sub_menu").css("display", "block");
        $(".navigation li.menu-dropdown").css("line-height", "0").children("a").hide();
    }).on("input", function() {
        $(".navigation .sub_menu,.navigation>li:not('.menu-dropdown')").find("a").each(function() {
            var regex = new RegExp($("#menu_filter").val().trim().toLowerCase());
            var x = $(this).text().toLowerCase();
            var res = x.match(regex, "i");
            if (res == null) {
                $(this).hide();
            } else {
                $(this).show();
                $(".divider").hide();
            }
        });
    }).on("blur", function() {
        if ($(this).val() == "") {
            $(".navigation .sub_menu li").css("display", "block");
            $(".navigation li.menu-dropdown").css("line-height", "inherit").children("a").show();
            $('.navigation li a').off('click');
            $(".divider").show();
            rareMenu();
        }
    });
    //end code for menu Search

    // Back to top button
    var html='<div id="scroll" title="Scroll to Top">Top<span></span></div>';
    $('body').append(html);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $("#scroll").on("click",function (e) {
        $("html, body").animate({
            scrollTop: 0
        });
    });
    // End of Back to top button
    $(window).resize(function () {
        spark_resize();
    })
});
/*END DEMO*/
