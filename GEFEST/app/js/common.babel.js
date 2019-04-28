"use strict";

$(function () {
  // слайдер 3 блок
  var swiperDesktop, swiperMobile;
  var id = 0;
  $('.section3__main__header').eq(id).css('display', 'block');
  $('.section3__right__head').eq(id).css('display', 'block');
  $('.section3__slider__item').eq(id).css('display', 'block');
  $('.section3__right_slider__item').eq(id).css('display', 'block');
  $('.section3__info__item').each(function () {
    $(this).find('.section3__info__value').eq(id).css('display', 'block');
  });
  createSwiper(id);
  createSwiperMobile(id);
  animate($('.section3__main__top_wrapper'), "fadeIn");
  animate($('.section3__slider'), "fadeIn");
  animate($('.section3__slider_bottom'), "fadeIn");
  animate($('.section3__button'), "fadeInUp");
  animate($('.section3__right__button'), "fadeInUp");
  animate($('.section3__right'), "fadeInRight");

  function changeInfoDesktop() {
    swiperDesktop.destroy();
    $('.section3__slider__item').css('display', 'none');
    $('.section3__slider__item').eq(id).css('display', 'block');
    $('.section3__slider__item').eq(id).addClass("fadeIn animated");
    createSwiper(id);
    $('.section3__main__header').css('display', 'none');
    $('.section3__main__header').eq(id).css('display', 'block');
    $('.section3__main__header').eq(id).addClass("fadeIn animated");
  }

  function changeInfoMobile() {
    swiperMobile.destroy();
    $('.section3__right_slider__item').css('display', 'none');
    $('.section3__right_slider__item').eq(id).css('display', 'block');
    $('.section3__right_slider__item').eq(id).addClass("fadeIn animated");
    createSwiperMobile(id);
    $('.section3__right__head').css('display', 'none');
    $('.section3__right__head').eq(id).css('display', 'block');
    $('.section3__right__head').eq(id).addClass("fadeIn animated");
    $('.section3__info__item .section3__info__value').css('display', 'none');
    $('.section3__info__item').each(function () {
      $(this).find('.section3__info__value').eq(id).css('display', 'block');
      $(this).find('.section3__info__value').eq(id).addClass("fadeIn animated");
    });
  }

  $('.section3__right__next').click(function (e) {
    if (++id == $('.section3__right__head').length - 1) id = 0;
    changeInfoMobile();
    changeInfoDesktop();
  });
  $('.section3__right__prev').click(function (e) {
    if (--id == 0) id = $('.section3__right__head').length - 1;
    changeInfoMobile();
    changeInfoDesktop();
  });
  $('.section3__slider_bottom').click(function (e) {
    id = e.target.getAttribute('index');

    if (id !== null) {
      changeInfoMobile();
      swiperDesktop.destroy();
      $('.section3__slider__item').css('display', 'none');
      $('.section3__slider__item').eq(id).css('display', 'block');
      $('.section3__slider__item').eq(id).addClass("fadeIn animated");
      createSwiper(id);
      $('.section3__main__header').css('display', 'none');
      $('.section3__main__header').eq(id).css('display', 'block');
      $('.section3__main__header').eq(id).addClass("fadeIn animated");
      $('.section3__info__item .section3__info__value').css('display', 'none');
      $('.section3__info__item').each(function () {
        $(this).find('.section3__info__value').eq(id).css('display', 'block');
        $(this).find('.section3__info__value').eq(id).addClass("fadeIn animated");
      });
    }
  });

  function createSwiperMobile(id) {
    var slider = $('.section3__right_slider .swiper-container').eq(id);
    swiperMobile = new Swiper(slider, {
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

  function createSwiper(id) {
    var slider = $('.section3__slider .swiper-container').eq(id);
    swiperDesktop = new Swiper(slider, {
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        depth: 300,
        modifier: 1.0,
        stretch: 0,
        slideShadows: false
      }
    });
  }

  var sliderBottom = new Swiper('.section3__slider_bottom .swiper-container', {
    slidesPerView: 6,
    spaceBetween: 100,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    } // breakpoints: {
    //   1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    // }

  }); // изменение высоты блока меню

  if (window.innerWidth > 480) {
    $('.section2__right').css('height', $('.section2__desktop').height() - $('.section2__header').height());
  } else {
    $('.section2__right').css('height', 'auto');
  }

  if (window.innerWidth > 768) {
    $('.section3__right').css('height', $('.section3__wprapper').height() - $('.section3__right__header').height());
  } else {
    $('.section3__right').css('height', 'auto');
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 480) {
      $('.section2__right').css('height', $('.section2__desktop').height() - $('.section2__header').height());
    } else {
      $('.section2__right').css('height', 'auto');
    }

    if (window.innerWidth > 768) {
      $('.section3__right').css('height', $('.section3__wprapper').height() - $('.section3__right__header').height());
    } else {
      $('.section3__right').css('height', 'auto');
    }
  }); // плавный переход по ссылкам в меню

  $(".section1__menu li a").mPageScroll2id(); // анимация меню

  $(".section1__menu__item").click(function () {
    if (window.innerWidth < 900) {
      $(".section1__menu").fadeOut(600);
      $(".section1__close_menu").fadeOut(1);
      $(".section1__menu_button").fadeIn(300);
    }
  });
  $(".section1__menu_button").click(function () {
    $(this).fadeOut(1);
    $(".section1__close_menu").fadeIn(300);
    $(".section1__menu").fadeIn(600);
    $(".section1__menu__item").addClass("fadeInUp animated");
  });
  $(".section1__close_menu").click(function () {
    $(".section1__menu").fadeOut(600);
    $(this).fadeOut(1);
    $(".section1__menu_button").fadeIn(300);
    $(".section1__menu__item").removeClass("fadeInUp animated");
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      $(".section1__menu").css('display', 'block');
      $(".section1__menu_button").css('display', 'none');
    } else {
      $(".section1__menu").css('display', 'none');
      $(".section1__close_menu").css('display', 'none');
      $(".section1__menu_button").css('display', 'flex');
    }
  }); // переключение слайдов на втором блоке

  var $itemsPrivilege = $('.section2__right__item');
  var $itemsRoundPrivilege = $('.section2__right__round');
  var $blocksPrivilege = $('.section2__left__content');
  animate($('.section2__button'), "fadeInUp");
  animate($('.section2__header'), "fadeInDown");
  animate($('.section2__left'), "fadeInLeft");
  animate($('.section2__right'), "fadeInRight");
  $itemsPrivilege.on('mouseover', function () {
    $blocksPrivilege.css('display', "none");
    $blocksPrivilege.eq($itemsPrivilege.index($(this))).css('display', "flex");
    $blocksPrivilege.eq($itemsPrivilege.index($(this))).addClass("fadeIn animated");
    $itemsRoundPrivilege.removeClass('section2__right__round_active');
    $itemsPrivilege.removeClass('section2__right__item_active');
    $(this).find('.section2__right__round').addClass('section2__right__round_active');
    $(this).addClass('section2__right__item_active');
  }); // рандом на квиз

  var linkQuiz = document.querySelectorAll('.section1__hero__button_quiz_link');
  var linkRandom = Math.floor(Math.random() * 4);
  if (linkRandom == 0) linkQuiz[0].removeAttribute('hidden');else if (linkRandom == 1) linkQuiz[1].removeAttribute('hidden');else if (linkRandom == 2) linkQuiz[2].removeAttribute('hidden');else if (linkRandom == 3) linkQuiz[3].removeAttribute('hidden');
});