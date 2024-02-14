// PRELOADER START
document.body.style.position = "fixed";
window.addEventListener("load", () => {
    document.body.style.position = "";
    document.querySelector("#pre-loader").style.opacity = 0;
    document.querySelector("#pre-loader").style.visibility = "hidden";
});
// PRELOADER END


// BANNER MODAL VIDEO
$(".fz-banner-vid-btn").modalVideo();

/////////////////////////////////////////////////////
// Button Hover Animation
$('.fz-def-btn').on('mouseenter', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('span').css({
        top: y,
        left: x
    });
});
$('.fz-def-btn').on('mouseout', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('span').css({
        top: y,
        left: x
    });
});

/////////////////////////////////////////////////////
// Button Move Animation
const all_btn = gsap.utils.toArray(".fz-def_btn_wrapper");
const all_btn_cirlce = gsap.utils.toArray(".fz-def-btn");
all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
        callParallax(e);
    });
    function callParallax(e) {
        parallaxIt(e, all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        gsap.to(target, 0.5, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement,
            y: ((relY - $this.height() / 2) / $this.height()) * movement,
            ease: Power2.easeOut,
        });
    }
    $(btn).mouseleave(function (e) {
        gsap.to(all_btn_cirlce[i], 0.5, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
        });
    });
});


// COUNTDOWN JS START =====
$(".fz-hot-deal-countdown").syotimer({
    date: new Date(2023, 2, 24, 15),
    periodic: true,
    periodInterval: 10,
    periodUnit: "d",
});
//===== COUNTDOWN JS END


// NICE SELECT JS START =====
$(document).ready(function () {
    $('select').niceSelect();
    $('#language-select').niceSelect('destroy');
});
// ===== NICE SELECT JS END

// ======= CATEGORY LIST OPEN/CLOSE START ======= 
const categoryArea = document.querySelector(".fz-category-area");
const categoryBtn = document.querySelector(".fz-category-btn");
const categoryList = document.querySelector(".fz-category-menu");

if (categoryBtn) {
    categoryBtn.addEventListener("click", () => {
        categoryList.classList.toggle("open");
    })
}
if (categoryList) {
    document.addEventListener("click", (e) => {
        if (!categoryArea.contains(e.target)) {
            categoryList.classList.remove("open");
        }
    })

    window.onscroll = () => {
        if (document.querySelector("header").classList.contains("fixed")) {
            categoryList.classList.remove("open")
        }
    }
}

// ======= CATEGORY LIST OPEN/CLOSE END =======

// NAV MENU OPEN/CLOSE BTN JS START =====
const hamburgers = document.querySelectorAll(".fz-hamburger");
const navbar = document.querySelector(".fz-offcanvas-main-nav-wrapper");

if (hamburgers) {
    hamburgers.forEach(hamburger => {
        hamburger.addEventListener("click", () => {
            navbar.classList.add("open");
            body.style.overflow = "hidden";
            console.log("ggg");
        });
    })
}
$('.fz-button-close').on('click', function () {
    $('.fz-offcanvas-main-nav-wrapper').removeClass('open');
    body.style.overflow = "auto";
})
//===== NAV MENU OPEN/CLOSE BTN JS END 

// ======= MEAN MENU OPTIONS START =======
$(document).ready(function () {
    $('#fz_header_nav').meanmenu({
        meanMenuContainer: '.mobile-menu-updated',
        meanScreenWidth: "991",
        meanExpand: ['+'],
        meanClose: ['-'],
    });
});
// ======= MEAN MENU OPTIONS END =======


// INDEX-2 SEARCH BAR JS START =====
$('.fz-2-search-btn').on('click', function (e) {
    $('.fz-cbsearchbar').addClass('fz-cb-searchbar-opened');
    $('.overlay').addClass('open');
})
$('.fz-cbsearchbar__close, .overlay').on('click', function (e) {
    $('.fz-cbsearchbar').removeClass('fz-cb-searchbar-opened');
    $('.overlay').removeClass('open');
})
//===== INDEX-2 SEARCH BAR JS END

// BANNER SLIDER JS START =====
$(".fz-3-banner-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 200,
});
//===== BANNER SLIDER JS END

// LAYER-CAKE SECTION SLIDER JS START =====
$(".fz-3-layer-cake-slider").owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    navContainer: ".fz-3-layer-cake-slider-nav",
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsiveBaseElement: document.body,

    responsive: {
        0: {
            items: 1,
            center: true,
        },

        480: {
            items: 2,
            center: false,
        },

        576: {
            items: 2,
        },

        768: {
            items: 3,
        },

        992: {
            items: 4,
        },

        1200: {
            margin: 30,
        }
    }
})
//===== LAYER-CAKE SECTION SLIDER JS END

// POUND-CAKE SECTION SLIDER JS START =====
$(".fz-3-pound-cake-slider").owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    navContainer: ".fz-3-pound-cake-slider-nav",
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsiveBaseElement: document.body,

    responsive: {
        0: {
            items: 1,
        },

        480: {
            items: 2,
        },

        576: {
            items: 2,
        },

        768: {
            items: 3,
        },

        992: {
            items: 4,
        },

        1200: {
            margin: 30,
        }
    }
});
//===== POUND-CAKE SECTION SLIDER JS END

// INDEX 4 PRODUCT SLIDER JS START =====
$(".fz-4-product-slider").each(function () {
    var navContainer = $(this).parents('section').find('.fz-4-product-slider-nav');
    $(this).owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        margin: 15,
        dots: false,
        navContainer: navContainer,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsiveBaseElement: document.body,

        responsive: {
            0: {
                items: 2,
            },

            480: {
                items: 2,
            },

            576: {
                items: 3,
            },

            768: {
                items: 3,
            },

            992: {
                items: 3,
            },

            1200: {
                margin: 30,
            }
        },
    });
});
//===== INDEX 4 PRODUCT SLIDER JS END

// INDEX 5 CATEGORY SLIDER JS START =====
$(".fz-5-category-slider").each(function () {
    $(this).owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        responsiveBaseElement: document.body,

        responsive: {
            0: {
                items: 2,
            },

            480: {
                items: 3,
            },

            576: {
                items: 4,
            },

            768: {
                items: 4,
            },

            992: {
                items: 4,
            },

            1200: {
                margin: 30,
            }
        },
    });
});
//===== INDEX 5 CATEGORY SLIDER JS END

// CUP-CAKE SECTION SLIDER JS START =====
$(".fz-cup-cake-slider").owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    navContainer: ".fz-cup-cake-slider-nav",
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsiveBaseElement: document.body,

    responsive: {
        0: {
            items: 1,
        },

        480: {
            items: 2,
        },

        576: {
            items: 2,
        },

        768: {
            items: 3,
        },

        992: {
            items: 4,
        },

        1200: {
            margin: 30,
        }
    }
})
//===== CUP-CAKE SECTION SLIDER JS START


$('#fz-2-testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    navContainer: ".fz-testimonial-slider-nav",
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    dotsContainer: ".fz-testimonial-slider-dots",
    dots: true,
})

$('#fz-3-testimonial-slider').slick({
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.testimonial-img-slider',
    appendArrows: $('.fz-3-testimonial-slider-nav'),
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-angle-up"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-angle-down"></i></button>',

    responsive: [
        {
            breakpoint: 992,
            settings: {
                verticalSwiping: false,
                vertical: false,
            }
        }
    ]
});

// INDEX-4 
$('.fz-4-testimonial-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    items: 2.3,
    navContainer: ".fz-4-testimonial-slider-nav",
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    dots: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },

        480: {
            items: 2,
            margin: 15
        },

        576: {
            items: 2,
            margin: 15
        },

        768: {
            items: 2,
            margin: 15
        },

        992: {
            items: 2.3,
        },

        1200: {
            margin: 30,
        }
    }
});

$('.testimonial-img-slider').slick({
    draggable: false,
    arrows: false,
    asNavFor: '#fz-3-testimonial-slider',
    fade: true,
});


$(".js-modal-btn").modalVideo();

const body = document.body;
const cartBtn = document.querySelector(".fz-header-cart-btn");
const cartModal = document.querySelector("#cart-area-modal");
const overlay = document.querySelector(".overlay");

if (cartBtn) {
    cartBtn.onclick = () => {
        cartModal.classList.add("open");
        overlay.classList.add("open");
        body.style.overflow = "hidden";
    }
}

const quantityOpts = document.querySelectorAll(".cart-product__quantity");

quantityOpts.forEach(quantityOpt => {
    const minusBtn = quantityOpt.querySelector(".cart-product__minus");
    const plusBtn = quantityOpt.querySelector(".cart-product__plus");

    const increasingQtyValue = () => {
        const productQuantityInput = quantityOpt.querySelector(".cart-product-quantity-input");
        productQuantityInput.value++;
    }

    const decreasingQtyValue = () => {
        const productQuantityInput = quantityOpt.querySelector(".cart-product-quantity-input");
        if (productQuantityInput.value > 1) {
            productQuantityInput.value--;
        }
    }

    plusBtn.onclick = () => {
        increasingQtyValue();
    }

    minusBtn.onclick = () => {
        decreasingQtyValue();
    }
});

// WISHLIST MODAL JS
const wishlistBtn = document.querySelector(".fz-header-wishlist-btn");
const wishlistModal = document.querySelector(".fz-wishlist-modal");

if (wishlistBtn) {
    wishlistBtn.onclick = () => {
        wishlistModal.classList.add("open");
        overlay.classList.add("open");
        body.style.overflow = "hidden";
    }
}


// CART & WISHLIST MODAL CLOSE
const closeBtns = document.querySelectorAll(".cart-area-modal-close-btn");
closeBtns.forEach(closeBtn => {
    closeBtn.onclick = () => {
        closeModal();
    }
})
overlay.addEventListener("click", () => {
    closeModal();
})

const closeModal = () => {
    cartModal.classList.remove("open");
    if (wishlistModal) {
        wishlistModal.classList.remove("open")
    }
    overlay.classList.remove("open");
    body.style.overflow = "visible";
}



// INDEX-3 BANNER VIDEO MODAL
$(".fz-1-banner-vid-btn").modalVideo();

$(".fz-1-banner-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    autoplayTimeout: 7000,
    responsive: {
        1200: {
            nav: true,
        }
    },
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    onTranslated: function () {
        // Select the active slide
        var $activeSlide = $('.owl-item.active');

        // Apply the animation only to the active slide
        $activeSlide.find(".text5").each(function () {
            $(this).html($(this).text().replace(/\S+/g, "<span class='word'>$&</span>"));
        });


        var $text5 = $activeSlide.find(".text5 span"),
            tl_5 = new TimelineMax({ repeat: 0 });

        tl_5.staggerFrom(
            $text5,
            0.5,
            { alpha: 0, x: 20, ease: Power1.easeOut },
            0.2,
            "+=0.2"
        )
    }
});


$('.fz-2-heading').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='2_text'>$&</span>"));
});
var $fz2Heading = $(".fz-2-heading span"),
    tl_2 = new TimelineMax({ repeat: -1 });

tl_2
    .staggerFrom(
        $fz2Heading,
        0.5,
        { top: "+=25px", rotation: "-=-3deg", alpha: 0, scale: 0.8, ease: Power1.easeOut },
        0.08)
    .to($fz2Heading, 0.5, { alpha: 0, ease: Power1.easeOut }, '+=5');



$(".fz-1-products-container").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    adaptiveHeight: true,
    appendArrows: $('.fz-1-latest-products-slider-nav'),
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-angle-right"></i></button>',

    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                infinite: true,
                autoplay: true,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});




$(".filter-navs button").on("click", function () {
    // Remove active class from all buttons
    $(".filter-navs button").removeClass("active");

    // Add active class to clicked button
    $(this).addClass("active");

    var filter = $(this).data("filter");
    $(".fz-1-products-container").slick("slickUnfilter");

    if (filter == "wood-door") {
        $(".fz-1-products-container").slick("slickFilter", ".wood-door");
    }
    else if (filter == "fiberglass") {
        $(".fz-1-products-container").slick("slickFilter", ".fiberglass");
    }
    else if (filter == "solid-core") {
        $(".fz-1-products-container").slick("slickFilter", ".solid-core");
    }
    else if (filter == "mdf") {
        $(".fz-1-products-container").slick("slickFilter", ".mdf");
    }
    else if (filter == "all") {
        $(".fz-1-products-container").slick("slickUnfilter");
    }
});


$(".fz-1-modern-door-slider").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    navContainer: ".fz-1-modern-door-slider-nav",
    margin: 15,
    responsiveBaseElement: body,
    responsive: {
        0: {
            items: 1,
        },

        480: {
            items: 2,
        },

        576: {
            items: 2,
        },

        768: {
            items: 3,
        },

        992: {
            items: 4,
        },

        1200: {
            items: 4
        }
    }
})

$(".fz-1-brands").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    responsive: {
        0: {
            items: 3,
        },

        480: {
            items: 3,
        },

        768: {
            items: 4,
        },

        992: {
            items: 5,
        }
    }
})


/*--- PRODUCT VIEW TYPE CHANGE JS START ---*/
const gridViewBtn = document.querySelector(".grid-view");
const listViewBtn = document.querySelector(".list-view");
const productsRow = document.querySelectorAll(".fz-inner-products-container .row > *");
const products = document.querySelectorAll(".fz-inner-products-container .fz-1-single-product");
const productsContainer = document.querySelector(".fz-inner-products-container");

if (listViewBtn) {
    listViewBtn.onclick = () => {
        productsContainer.classList.add("list-view-on");
        gridViewBtn.classList.remove("active");
        listViewBtn.classList.add("active");
    }
}

if (gridViewBtn) {
    gridViewBtn.onclick = () => {
        productsContainer.classList.remove("list-view-on");
        gridViewBtn.classList.add("active");
        listViewBtn.classList.remove("active");
    }
}
/*--- PRODUCT VIEW TYPE CHANGE JS END ---*/

// FAQ ACCORDION JS START =====
const accordionItems = document.querySelectorAll(".fz-single-accordion-item");

accordionItems.forEach((accordionItem) => {
    accordionItem.onclick = () => {
        const openedItems = document.querySelector(".fz-single-accordion-item.open");
        if (accordionItem.classList.contains("open")) {
            openedItems.classList.remove("open")
        } else {
            accordionItem.classList.toggle("open");
            if (openedItems) {
                openedItems.classList.remove("open")
            }
        }
    }
})
//===== FAQ ACCORDION JS START


// FIXED HEADER =====
window.addEventListener("scroll", () => {
    const toFixHeaders = document.querySelectorAll(".to-be-fixed");
    toFixHeaders.forEach(toFixHeader => {
        if (window.pageYOffset > 100) {
            toFixHeader.classList.add("fixed");
            document.body.style.paddingTop = toFixHeader.getBoundingClientRect().height + 'px';
        } else {
            toFixHeader.classList.remove("fixed");
            document.body.style.paddingTop = 0;
        }
    })
});
//===== FIXED HEADER

// QUICK VIEW MODAL JS =====
const quickviewBtns = document.querySelectorAll(".fz-3-quick-view");
const quickviewModal = document.querySelector(".fz-quick-view-modal");

quickviewBtns.forEach(quickviewBtn => {
    quickviewBtn.onclick = () => {
        quickviewModal.classList.add("open");
        overlay.classList.add("open");
        body.style.overflow = "hidden";
    }

    document.onclick = (e) => {
        if (!e.target.classList.contains("fz-3-quick-view") && !quickviewModal.contains(e.target)) {
            quickviewModal.classList.remove("open");
        }
    }
})
//===== QUICK VIEW MODAL JS

// CLIENTS SLIDER JS START =====
$('.clients').owlCarousel({
    items: 5,
    autoplay: true,
    loop: true,

    responsive: {
        0: {
            items: 3,
        },

        480: {
            items: 3,
        },

        768: {
            items: 4,
        },
        992: {
            items: 5,
        }
    }
});
$('.clients-2').owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    dots: false,
    margin: 15,

    responsive: {
        0: {
            items: 3,
        },

        480: {
            items: 4,
        },

        768: {
            items: 5,
        },
        992: {
            items: 5,
        },
        1200: {
            items: 6
        }
    }
});
//===== CLIENTS SLIDER JS END 

// --------------------------------- PRDUCTS FILTERING BY PRICE START ----------------------------------------
let keypressSliders = document.querySelectorAll(".slider-keypress");

keypressSliders.forEach(function (keypressSlider, index) {
    let input0 = keypressSlider.parentElement.querySelector(".input-with-keypress-0");
    let input1 = keypressSlider.parentElement.querySelector(".input-with-keypress-1");
    let inputs = [input0, input1];

    if (keypressSlider) {
        noUiSlider.create(keypressSlider, {
            start: [240, 768],
            connect: true,
            step: 1,
            range: {
                min: [100],
                max: [1000]
            }
        });

        keypressSlider.noUiSlider.on("update", function (values, handle) {
            inputs[handle].innerText = values[handle];

            function setSliderHandle(i, value) {
                var r = [null, null];
                r[i] = value;
                keypressSlider.noUiSlider.set(r);
            }

            inputs.forEach(function (input, handle) {
                input.addEventListener("change", function () {
                    setSliderHandle(handle, this.value);
                });

                input.addEventListener("keydown", function (e) {
                    var values = keypressSlider.noUiSlider.get();
                    var value = Number(values[handle]);
                    var steps = keypressSlider.noUiSlider.steps();
                    var step = steps[handle];
                    var position;

                    switch (e.which) {
                        case 13:
                            setSliderHandle(handle, this.value);
                            break;

                        case 38:
                            position = step[1];
                            if (position === false) {
                                position = 1;
                            }
                            if (position !== null) {
                                setSliderHandle(handle, value + position);
                            }
                            break;

                        case 40:
                            position = step[0];
                            if (position === false) {
                                position = 1;
                            }
                            if (position !== null) {
                                setSliderHandle(handle, value - position);
                            }
                            break;
                    }
                });
            });
        });
    }
});

// -------------------------------- PRDUCTS FILTERING BY PRICE END -----------------------------------------



//----------------- PRODCUT DETAILS IMAGES SLIDER JS START ---------------------------------
$('#fz-product-details__img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
});

$('.fz-product-details__img-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.fz-product-details__img',
    dots: false,
    focusOnSelect: true,
});
//----------------- PRODCUT DETAILS IMAGES SLIDER JS END ---------------------------------



$(document).on('click', function (event) {
    if (!$(event.target).closest('.header-search form').length) {
        $('.header-search form').removeClass('active');
    }
});
$('#openSearch').on('click', function (event) {
    event.stopPropagation();
    $('.header-search form').toggleClass('active');
});
$(document).on('click', function (event) {
    if (!$(event.target).closest('.header-action').length) {
        $('.header-action').removeClass('active');
    }
});
$('#openInfo').on('click', function (event) {
    event.stopPropagation();
    $('.header-action').toggleClass('active');
});



$(window).on('load resize', function () {
    if ($(this).width() < 992) {
        $('.fz-4-menu').appendTo('.fz-4-mobile-menu .main-menu');
        $('.fz-dropdown > .fz-nav-link').on('click', function () {
            $(this).siblings('.fz-submenu').toggle().parents('.fz-dropdown').siblings().find('.fz-submenu').hide();
        });
    }
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.fz-4-mobile-menu .main-menu').length) {
        $('.fz-4-mobile-menu .main-menu').removeClass('active');
        $('.app-menu-overlay').removeClass('active');
    }
});
$('.open-main-menu').on('click', function (e) {
    e.stopPropagation();
    $('.fz-4-mobile-menu .main-menu').addClass('active');
    $('.app-menu-overlay').addClass('active');
});

// BANNER SLIDER JS START =====
$(".fz-5-banner-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 0,
    dots: false
});

$(document).ready(function () {
    /*---------------------------
    Language Selection Menu
    ---------------------------*/
    if ($('#aw').length) {
        $('#aw').flagStrap({
            countries: {
                "US": "ENG",
                "BD": "BAN"
            },
            buttonSize: "",
            buttonType: "",
            buttonText: "Country of",
            labelMargin: "10px",
            scrollable: false,
            scrollableHeight: "350px"
        });
    }
});



$('.frame-color li').each(function () {
    var background_color = $(this).attr('data-color');
    $(this).css('background', '#' + background_color);
});

$(function () {
    $('.shop-2-filter-btn').on('click', function (e) {
        $('.fz-sidebar-2').toggleClass('active');
        $('body').toggleClass('overflow-hidden');
        e.stopPropagation()
    });

    // Remove the stopPropagation() function
    $('.fz-sidebar-2').on('click', function (e) {
    });

    $(document).on('click', function (e) {
        if ($(e.target).is('.fz-sidebar-2 *') === false) {
            $('.fz-sidebar-2').removeClass('active');
            $('body').removeClass('overflow-hidden');
        }
    });
});


$('.product-categories .has-sub').on('click', function () {
    $(this).toggleClass('open').siblings('.product-categories').toggle();
    $(this).parent().siblings().find('.product-categories').hide();
    $(this).parent().siblings().find('.has-sub').removeClass('open');
});

// INDEX-6 BANNER SLIDER 
$(".fz-6-banner-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dotsClass: "fz-6-slider-dots",
})

// INDEX-6 PRODUCTS FILTER
const fz_6_Row = document.querySelector(".fz-6-products-row")
if (fz_6_Row) {
    mixitup(fz_6_Row);
}

// INDEX-6 FLASH SALE COUNTDOWN
$(".fz-6-flash-countdown").syotimer({
    date: new Date(2023, 10, 9, 20, 30),
});


// ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    once: true,
});


// INDEX-6 BLOG SLIDER
$(".fz-6-blogs-slider").owlCarousel({
    margin: 30,
    navContainer: "#fz-6-blogs-slider-nav",
    navText: ['<i class="fa-light fa-arrow-left"></i>', '<i class="fa-light fa-arrow-right"></i>'],
    loop: true,
    dots: false,

    responsive: {
        0: {
            items: 1,
        },

        480: {
            items: 1.4,
            center: true,
        },

        576: {
            items: 1.6,
            center: true,
        },

        768: {
            items: 2,
        },

        992: {
            items: 3,
        }
    }
});

// INDEX-7 BANNER SLIDER
$(".fz-7-banner-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
})

// INDEX-7 PRODUCTS SLIDER
$(".fz-7-trending-products-slider").owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    autoplay: true,
    navContainer: "#fz-7-trending-products-slider-nav",
    navText: ['<i class="fa-light fa-angle-left"></i>', '<i class="fa-light fa-angle-right"></i>'],
    margin: 20,
    responsive: {
        0: {
            items: 1,
            margin: 20,
        },
        480: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            margin: 30,
        }
    }
});

// INDEX-7 BLOG SLIDER
$(".fz-7-blogs-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 20,
    navContainer: "#fz-7-blogs-slider-nav",
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    dots: false,

    responsive: {
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            margin: 30,
            items: 3,
        }
    }
});

// INDEX-7 BRANDS SLIDER
$(".fz-7-brands-slider").owlCarousel({
    items: 2,
    loop: true,
    dots: false,
    autoplay: true,
    margin: 30,

    responsive: {
        576: {
            items: 3,
        },
        992: {
            margin: 65,
            items: 4,
        }
    }
})


// INDEX-8 BANNER SLIDER
$(".fz-8-banner-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
});


// INDEX-8 PRODUCTS SLIDER
$(".fz-8-products-slider").owlCarousel({
    items: 2,
    autoplay: true,
    dots: false,
    loop: true,
    navContainer: "#fz-8-products-slider-nav",
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],

    responsive: {
        0: {
            margin: 20,
            items: 1,
        },
        480: {
            margin: 20,
            items: 2,
        },
        576: {
            items: 2,
            margin: 30,
        },

        1400: {
            margin: 50,
        }
    }
});

// INDEX-8 BRANDS SLIDER
$(".fz-8-brands-slider").owlCarousel({
    items: 5,
    loop: true,
    dots: false,
    margin: 65,
    autoplay: true,

    responsive: {
        0: {
            items: 3,
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        },
    }
});


// INDEX-12 BLOGS SLIDER 
$(".fz-12-blogs-slider").owlCarousel({
    items: 2,
    autoplay: true,
    loop: true,
    dots: false,
    navContainer: "#fz-12-blogs-slider-nav",
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],

    responsive: {
        0: {
            margin: 30,
            items: 1,
        },
        768: {
            margin: 30,
            items: 2,
        },
        992: {
            margin: 50,
            items: 2,
        }
    }
});


// INDEX-9 BANNER SLIDER 
$(".fz-9-banner-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: false,
});

// INDEX-9 CATEGORY SLIDER
$(".fz-9-categories-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    appendArrows: $('#fz-9-categories-slider-nav'),
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',

    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                infinite: true,
                autoplay: true,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// INDEX-9 TRENDY PRODUCT SLIDER

$(".fz-9-trendy-slider").owlCarousel({
    loop: true,
    autoplay: true,
    navContainer: "#fz-9-trendy-slider-nav",
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    dots: false,
    responsive: {
        0: {
            margin: 20,
            items: 1,
        },
        480: {
            items: 2,
            margin: 20,
        },
        768: {
            margin: 20,
            items: 3,
        },
        992: {
            items: 4,
            margin: 20,
        },
        1200: {
            items: 4,
            margin: 30
        }
    }
});



$(".fz-9-product-active").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    appendArrows: $('.fz-9-poduct-slider-nav'),
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',

    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                infinite: true,
                autoplay: true,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
// INDEX-9 BRANDS SLIDER
$(".fz-9-brands-slider").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    margin: 30,
    autoplay: true,
    nav: false,
    appendArrows: false,
    responsiveClass: false,
    responsive: {
        576: {
            items: 4,
        },
        768: {
            items: 5,
        },
        992: {
            items: 6,
        }
    }
})

// INDEX-9-10 MIXITUP
const fz_9_mix_1 = document.querySelector(".fz-mixitup-products-row")
if (fz_9_mix_1) {
    mixitup(fz_9_mix_1);
}

// fz-10-banner-slider
$('#fz-10-banner-bg-slider').slick({
    arrows: false,
    asNavFor: '.fz-10-banner-prod-slider',
    fade: true,
});

$('.fz-10-banner-prod-slider').slick({
    asNavFor: '#fz-10-banner-bg-slider',
    appendArrows: ".fz-10-banner-prod-slider-nav",
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-light fa-arrow-left-long"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-light fa-arrow-right-long"></i></button>',
})

//INDEX-10 OFFER SECTION owlCarousel
$('.fz-10-offer-section-carousel').owlCarousel({
    dots: false,
    nav: false,
    // margin: 70,
    items: 1.6,
    loop: true,
    autoplay: true,
    // stagePadding: 70,
    stagePadding: 30,
    margin: 30,

    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 1.1,
        },

        576: {
            items: 1.3,
        },
        768: {
            items: 1.4,
            stagePadding: 50,
            margin: 50,
        }
    }
});

//INDEX-10 BRAND SECTION owlCarousel
$(".fz-10-brands-slider").owlCarousel({
    items: 5,
    loop: true,
    dots: false,
    margin: 65,
    autoplay: true,
    responsive: {
        0: {
            items: 3,
            margin: 35,
        },
        480: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1199: {
            items: 5,
        }
    }
});

// INDEX-11 CATEGORY SLIDER
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    cssWidthAndHeight: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: ".arrow-btn-right",
        prevEl: ".arrow-btn-left",
    },
});

// INDEX-11 BLOG SLIDER
var swiper = new Swiper(".fz-11-blog-mySwiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".arrow-btn-right",
        prevEl: ".arrow-btn-left",
    },
});

$(".fz-11-footer-logo-container").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    margin: 40,
    responsive: {
        0: {
            items: 2,
        },
        480: {
            items: 3,
        },
        992: {
            items: 4,
        },
    }
})

// INDEX-12 PRODUCTS SLIDER
$(".fz-12-trendy-products-slider").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    items: 4,
    margin: 20,
    navContainer: "#fz-12-trendy-products-slider-nav",
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],

    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            margin: 30,
        }
    }
});


// INDEX-12 IMAGE REVEAL
gsap.registerPlugin(ScrollTrigger);
let imageContainers = document.querySelectorAll(".reveal");

imageContainers.forEach(imageContainer => {
    let image = imageContainer.querySelector("img");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: imageContainer,
            toggleActions: "restart none none reset",
            once: true,
        }
    });

    tl.set(imageContainer, { autoAlpha: 1 });
    tl.from(imageContainer, 0.8, {
        xPercent: -100,
        ease: Power2.out
    });
    tl.from(image, 0.8, {
        xPercent: 100,
        scale: 1.3,
        delay: -0.8,
        ease: Power2.out
    });
});

// INDEX-12 BANNER SLIDER 
$(".fz-12-banner-slider").owlCarousel({
    items: 1,
    loop: true,
    dotsContainer: ".fz-12-banner-slider-dots",
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
});


// ======= INDEX-12 MEAN MENU OPTIONS END =======
$(document).ready(function () {
    $('#fz-12_header_nav').meanmenu({
        meanMenuContainer: '.fz-12-mobile-menu-updated',
        meanScreenWidth: "4000",
        meanExpand: ['+'],
        meanClose: ['-'],
    });
});
// ======= INDEX-12 MEAN MENU OPTIONS END =======


// INDEX-12 BRANDS SLIDER
$(".fz-12-brands-slider").owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    margin: 40,
    responsive: {
        0: {
            items: 3,
        },
        576: {
            items: 4,
        },
        768: {
            items: 5,
        },
        992: {
            margin: 65,
            items: 5
        },
    }
})