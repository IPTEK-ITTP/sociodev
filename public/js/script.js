/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

/*

Style   : MobApp Script JS
Version : 1.0
Author  : Surjith S M
URI     : https://surjithctly.in/

Copyright © All rights Reserved

*/

/*-----------------------------------
 * FIXED  MENU - HEADER
 *-----------------------------------*/
function menuscroll() {
    var $navmenu = $('.nav-menu');
    if ($(window).scrollTop() > 50) {
        $navmenu.addClass('is-scrolling');
    } else {
        $navmenu.removeClass("is-scrolling");
    }
}
menuscroll();
$(window).on('scroll', function () {
    menuscroll();
});
/*-----------------------------------
 * NAVBAR CLOSE ON CLICK
 *-----------------------------------*/

$('.navbar-nav > li:not(.dropdown) > a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
/*
 * NAVBAR TOGGLE BG
 *-----------------*/
var siteNav = $('#navbar');
siteNav.on('show.bs.collapse', function (e) {
    $(this).parents('.nav-menu').addClass('menu-is-open');
});
siteNav.on('hide.bs.collapse', function (e) {
    $(this).parents('.nav-menu').removeClass('menu-is-open');
});

/*-----------------------------------
 * ONE PAGE SCROLLING
 *-----------------------------------*/
// Select all links with hashes
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});
/*-----------------------------------
 * OWL CAROUSEL
 *-----------------------------------*/
var $testimonialsDiv = $('.testimonials');
if ($testimonialsDiv.length && $.fn.owlCarousel) {
    $testimonialsDiv.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
    });
}

var $galleryDiv = $('.img-gallery');
if ($galleryDiv.length && $.fn.owlCarousel) {
    $galleryDiv.owlCarousel({
        nav: false,
        center: true,
        loop: true,
        autoplay: true,
        dots: true,
        navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
}

/***/ })

/******/ });