$(function() {

    var offset1 = $('.section1').offset().top;
    var offset2 = $('.section2').offset().top;
    var offset3 = $('.section3').offset().top;
    var offset4 = $('.section4').offset().top;
    var offset5 = $('.section5').offset().top;




    function updateOffsetTops() {
        offset1 = $('.section1').offset().top;
        offset2 = $('.section2').offset().top;
        offset3 = $('.section3').offset().top;
        offset4 = $('.section4').offset().top;
        offset5 = $('.section5').offset().top;


        // console.log(offset1);
        // console.log(offset2);
        // console.log(offset3);
        // console.log(offset4);
        // console.log(offset5);

        // console.log('---------------');

    }



    //------slide-button + menu bar-----
    var isOpen = false;
    $('#nav-icon1').on('click', function() {

        if (isOpen == false) {
            $('#slide-button').addClass('open');
            $('#slide-button').one('transitionend', function() {
                $('.menu-close-btn').addClass('show');

            });

            isOpen = true;
        } else {
            $('#slide-button').removeClass('open');
            $('#slide-button').one('transitionend', function() {
                $('.menu-close-btn').removeClass('show');

            });
            isOpen = false;

        }


    });

    $('.menu-close-btn').on('click', function() {
        $('#slide-button').removeClass('open');

    });

    //-----menu bar----

    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
    });



    //----------------------------

    var menuOffset = $('.menu-list').offset();
    // console.log(menuOffset);
    $(document).on('scroll', function() {
        var iScrollTop = $(document).scrollTop();



        if (iScrollTop > menuOffset.top) {
            $('.menu-list').addClass('fixed');

        } else {
            $('.menu-list').removeClass('fixed');

        }

    });


    //--------------------
    menuOffset = $('.main').offset(); //remove var here
    // console.log(menuOffset);
    $(document).on('scroll', function() {
        var iScrollTop = $(document).scrollTop();


        if (iScrollTop > menuOffset.top) {
            $('.main').addClass('fixed');
            $('#nav-icon1').find('span').addClass('fixed');

        } else {
            $('.main').removeClass('fixed');
            $('#nav-icon1').find('span').removeClass('fixed');

        }

    });
    //----------highlight menu-------------------

    $(document).on('scroll', function() {

        var iRealScrollTop = $(document).scrollTop();
        //console.log(iScrollTop);

        var activeLi;

        var iScrollTop = iRealScrollTop + 151;

        if ((iScrollTop >= offset1) && (iScrollTop < offset2)) {
            //looking at section 1
            activeLi = $('.menu-list>li:nth-child(1)');
        }
        if ((iScrollTop >= offset2) && (iScrollTop < offset3)) {
            //looking at section 2
            activeLi = $('.menu-list>li:nth-child(2)');
        }
        if ((iScrollTop >= offset3) && (iScrollTop < offset4)) {
            //looking at section 3
            activeLi = $('.menu-list>li:nth-child(3)');
        }
        if ((iScrollTop >= offset4) && (iScrollTop < offset5)) {
            //looking at section 4
            activeLi = $('.menu-list>li:nth-child(4)');
        }


        if (iScrollTop >= offset5) {
            // looking at section 5
            activeLi = $('.menu-list>li:nth-child(5)');
        }



        activeLi.addClass('active');
        $('.menu-list>li').not(activeLi).removeClass('active');

    });

    //------------smooth scrolling---------------------------

    $('a[data-to]').on('click', function(e) {
        e.preventDefault(); //dont want the 'a' to jump//just in case the link works 

        var sTarget = $(this).data('to'); //section1 etc
        var offsetTop = $(sTarget).offset().top;
        $('body').animate({
            scrollTop: offsetTop - 150 //i change this so that i can see title between section, i fixed this too yay
        }, 1000); //html,body is for jqeury to select th whole thing

    });



    //--------calculation section 2------------------

    $('.builder-tick-feedback').hide();
    $('.down').hide();
    $('.up').show();
    $('#down-input').show();
    $('#up-input').hide();
    updateOffsetTops();

    $('#search-btn').on('click', function(event) {
        event.preventDefault();

        var sGuests = $('#guests').val();
        var iGuests = parseInt(sGuests);

        var sDays = $('#days').val();
        var iDays = parseInt(sDays);

        var iPriceA = 0;
        var iPriceB = 0;
        var iPriceC = 0;
        var iPriceD = 0;

        $('.hotelA').attr("checked", false);
        $('.hostelB').attr("checked", false);
        $('.motelC').attr("checked", false);
        $('.houseD').attr("checked", false);
        $('.A').attr("checked", false);
        $('.B').attr("checked", false);
        $('.C').attr("checked", false);
        $('.D').attr("checked", false);
        $('.accomodation-output').html(0);
        $('.meal-output').html(0);
        $('.total-output').html(0);


        $('.test').addClass('disable-container');

        if ((iGuests >= 1) && (iGuests <= 2) && (iDays >= 1) && (iDays <= 5)) {
            $('.container-A').removeClass('disable-container');
            console.log('hi');
            $('.planA').addClass('enable');
            iPriceA = 157 * iDays;
            $('#priceA').html('NZD ' + iPriceA);
            $('.hotelA').attr("disabled", false);

        } else {
            $('.planA').removeClass('enable');
            $('#priceA').html('');
            $('.hotelA').attr("disabled", true);


        }

        if ((iGuests == 1) && (iDays >= 1) && (iDays <= 10)) {
            $('.container-B').removeClass('disable-container');
            $('.planB').addClass('enable');
            iPriceB = 30 * iDays;
            $('#priceB').html('NZD ' + iPriceB);
            $('.hostelB').attr("disabled", false);

        } else {
            $('.planB').removeClass('enable');
            $('#priceB').html('');
            $('.hostelB').attr("disabled", true);

        }

        if ((iGuests >= 2) && (iGuests <= 4) && (iDays >= 3) && (iDays <= 10)) {
            $('.container-C').removeClass('disable-container');
            $('.planC').addClass('enable');
            iPriceC = 90 * iDays;
            $('#priceC').html('NZD ' + iPriceC);
            $('.motelC').attr("disabled", false);

        } else {
            $('.planC').removeClass('enable');
            $('#priceC').html('');
            $('.motelC').attr("disabled", true);

        }

        if ((iGuests >= 1) && (iGuests <= 4) && (iDays >= 2) && (iDays <= 15)) {
            $('.container-D').removeClass('disable-container');
            $('.planD').addClass('enable');
            iPriceD = 240 * iDays;
            $('#priceD').html('NZD ' + iPriceD);
            $('.houseD').attr("disabled", false);

        } else {
            $('.planD').removeClass('enable');
            $('#priceD').html('');
            $('.houseD').attr("disabled", true);

        }
        if ((iGuests >= 1) && (iGuests <= 4) && (iDays >= 1) && (iDays <= 15)) {
            $('.holiday-accordian').hide();
            $('.home-plan-accordian').slideDown('slow');
            $('body').scrollTop($('.text-main2').offset().top - 150);
            $('#down-input').hide();
            $('#builder-tick-input').show();
            $('#up-hotel').hide();
            $('#down-hotel').show();

        }
    });



    //------open close based on flow and validation----no jumping for user---
    //------first the holiday plan must open------

    $('.holiday-accordian').removeClass('builder-accordian_body'); //pls unhide later
    $('.builder-accordian_body').hide(); //pls unhide later

    updateOffsetTops();




    //------next-btn from home section-----

    $('#next-btn-home').on('click', function(event) {
        event.preventDefault();

        var isHotelChecked = $('#hotelA').is(':checked') || $('#hostelB').is(':checked') || $('#motelC').is(':checked') || $('#houseD').is(':checked');

        if (isHotelChecked == true) {
            $('.home-plan-accordian').hide();
            $('.meal-plan-accordian').slideDown('slow');
            $('body').scrollTop($('.text-main2').offset().top - 150);
            $('#down-hotel').hide();
            $('#builder-tick-hotel').show();
            $('#up-meal').hide();
            $('#down-meal').show();

        }


    });

    //---next-btn from meal section-----

    $('#next-btn-meal').on('click', function(event) {
        event.preventDefault();

        $('.meal-plan-accordian').hide();
        $('.cost-plan-accordian').slideDown('slow');
        $('body').scrollTop($('.text-main2').offset().top - 150);
        $('#down-meal').hide();
        $('#builder-tick-meal').show();
        $('#up-cost').hide();
        $('#down-cost').show();


    });

    $('#back-btn-cost').on('click', function(event) {
        event.preventDefault();

        $('.cost-plan-accordian').hide();
        $('.meal-plan-accordian').slideDown('slow');
        $('body').scrollTop($('.text-main2').offset().top - 150);
        $('#builder-tick-meal').hide();
        $('#down-meal').show();
        $('#down-cost').hide();
        $('#up-cost').show();

    });

    $('#back-btn-meal').on('click', function(event) {
        event.preventDefault();

        $('.meal-plan-accordian').hide();
        $('.home-plan-accordian').show();
        $('body').scrollTop($('.text-main2').offset().top - 150);
        $('#builder-tick-hotel').hide();
        $('#down-hotel').show();
        $('#down-meal').hide();
        $('#up-meal').show();

    });

    $('#back-btn-home').on('click', function(event) {
        event.preventDefault();

        $('.home-plan-accordian').hide();
        $('.holiday-accordian').show();
        $('body').scrollTop($('.text-main2').offset().top - 150);
        $('#builder-tick-input').hide();
        $('#down-input').show();
        $('#down-hotel').hide();
        $('#up-hotel').show();
        $('.meal-plan-accordian').slideUp();



    });



    //----------total accomodation+meal=totalcost---------

    $.fn.updateTotal = function() {

        var sHotelPrice = $('.accomodation-output').html();
        var iHotelPrice = parseInt(sHotelPrice);
        var sMealPrice = $('.meal-output').html();
        var iMealPrice = parseFloat(sMealPrice);

        var iTotalPrice = iHotelPrice + iMealPrice;
        $('.total-output').html(iTotalPrice);
    }; //added semicolon here

    //----------accomodation output-------
    $.fn.updateAccomodation = function() {
        var sDays = $('#days').val();
        var iDays = parseInt(sDays);
        var iAccomodationPrice = $('input[name="accomodation"]:checked').val() * iDays;
        $('.accomodation-output').html(iAccomodationPrice);
        $.fn.updateTotal();
    }; //added semicolon here
    $('.hotelA').on('click', function() {
        $.fn.updateAccomodation();
    });
    $('.hostelB').on('click', function() {
        $.fn.updateAccomodation();
    });

    $('.motelC').on('click', function() {
        $.fn.updateAccomodation();
    });

    $('.houseD').on('click', function() {
        $.fn.updateAccomodation();
    });

    //-------meal output----------
    $.fn.updateMeal = function() {
        var sGuests = $('#guests').val();
        var iGuests = parseInt(sGuests);
        var sDays = $('#days').val();
        var iDays = parseInt(sDays);

        // var iMealPrice = parseFloat(sVal); //this is added today
        var iMealPrice = $('input[name="meal"]:checked').val() * iGuests * iDays;

        // console.log(iMealPrice);
        $('.meal-output').html(iMealPrice);
        $.fn.updateTotal();
    }; //added semicolon here

    $('.A').on('click', function() {
        $.fn.updateMeal();
    });
    $('.B').on('click', function() {
        $.fn.updateMeal();
    });

    $('.C').on('click', function() {
        $.fn.updateMeal();
    });

    $('.D').on('click', function() {
        $.fn.updateMeal();
    });
    //-------------------




    //------form validation this is jquery plugin------
    // console.log('bla');

    $('#builder-validate').validate({
        rules: {
            guests: {
                required: true,
                range: [1, 4]

            },
            days: {
                required: true,
                range: [1, 15]
            },

        },

        messages: {
            guests: {
                required: 'Please enter number only',
                range: 'Must be less than 4 person'
            },
            days: {
                required: 'Please enter number only',
                range: 'Must be max 15 days only'
            }

        }


    });



    //----------text section2 center-----
    var moveInOffset = 200;


    $('[data-move-up-speed]').each(function(i, el) {

        var iSpace = moveInOffset;
        var iSpeed = $(el).data('move-up-speed');

        $(el).css({
            'transform': 'translateY(' + (iSpace * iSpeed) + 'px)'
        });

    });



    $(document).on('scroll', function() {

        var iScrollTop = $(document).scrollTop();
        var iSpace = moveInOffset - iScrollTop;

        if (iSpace < 0) {
            iSpace = 0;
        }

        $('[data-move-up-speed]').each(function(i, el) {

            var iSpeed = $(el).data('move-up-speed');

            $(el).css({
                'transform': 'translateY(' + iSpace * iSpeed + 'px)'
            });

        });

    });




    //-----section3 read-more-button-right-fiordland-----
    $('.read-description-right-fiordland').hide();
    updateOffsetTops();

    var isOpenFiordland = false; //var removed
    $('#read-more-btn-right-fiordland').on('click', function() {

        if (isOpenFiordland == false) {
            $('.read-description-right-fiordland').slideDown('slow');

            isOpenFiordland = true;
        } else {
            $('.read-description-right-fiordland').slideUp('slow');

            isOpenFiordland = false;

        }

    });




    //------section3 read-more-btn-right-mtcook------
    $('.read-description-right-mtcook').hide();
    updateOffsetTops();

    var isOpenMtcook = false; //var removed
    $('#read-more-btn-right-mtcook').on('click', function() {

        if (isOpenMtcook == false) {
            $('.read-description-right-mtcook').slideDown('slow');

            isOpenMtcook = true;
        } else {
            $('.read-description-right-mtcook').slideUp('slow');

            isOpenMtcook = false;

        }

    });


    //-----section3 read-more-button-left-tongariro-------
    $('.read-description-left-tongariro').hide();
    updateOffsetTops();

    var isOpenTongariro = false; //var removed
    $('#read-more-btn-left-tongariro').on('click', function() {

        if (isOpenTongariro == false) {
            $('.read-description-left-tongariro').slideDown('slow');

            isOpenTongariro = true;

        } else {
            $('.read-description-left-tongariro').slideUp('slow');

            isOpenTongariro = false;

        }

    });




    //-----section3 read-more-button-left-queenstown-------
    $('.read-description-left-queenstown').hide();
    updateOffsetTops();

    var isOpenQueenstown = false; //var removed
    $('#read-more-btn-left-queenstown').on('click', function() {

        if (isOpenQueenstown == false) {
            $('.read-description-left-queenstown').slideDown('slow');

            isOpenQueenstown = true;

        } else {
            $('.read-description-left-queenstown').slideUp('slow');

            isOpenQueenstown = false;

        }

    });



    //-----------swiper plugin-section4-----

    // $(document).ready(function () {
    //initialize swiper when document ready  
    // var mySwiper = new Swiper('.swiper-container', {
    //         // Optional parameters
    //         direction: 'vertical',
    //         loop: true
    //     })
    // });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 50,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    //---------swiper 2-----------------
    swiper = new Swiper('.swiper-container.s2', { //var removed
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

    updateOffsetTops();


});