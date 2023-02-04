// подключение swiper
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const mainSlider = new Swiper('.main-slider', {
  modules: [Navigation],
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.main-next',
    prevEl: '.main-prev',
  },
});
const secondSlider = new Swiper('.production-slider', {
  modules: [Navigation],
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.production-next',
    prevEl: '.production-prev',
  },
});
const thirdSlider = new Swiper('.production-slider2', {
  modules: [Navigation],
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.production2-next',
    prevEl: '.production2-prev',
  },
});
const fourSlider = new Swiper('.production-slider3', {
  modules: [Navigation],
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.production3-next',
    prevEl: '.production3-prev',
  },
});

//ПЛАВНЫЙ СКРОЛЛ К ЯКОРЯМ
$('.to-anchor').click(function (event) {
  $('#offcanvasRight').offcanvas('hide');
  $('.modal').modal('hide');

  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 50
      }, 500, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
