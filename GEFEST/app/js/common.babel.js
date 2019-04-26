"use strict";

$(function () {
  // слайдер 3 блок
  $('.section3__slider_bottom img').click(function () {
    var id = $(this).attr('index');
    $('.section3__slider__item').css('display', 'none');
    $('.section3__slider__item').eq(id).css('display', 'block');
    $('.section3__slider__item').eq(id).addClass("fadeIn animated"); // $blocksPrivilege.css('display', "none");
    // $blocksPrivilege.eq($itemsPrivilege.index($(this))).css('display', "flex");
    // $blocksPrivilege.eq($itemsPrivilege.index($(this))).addClass("fadeIn animated");
    // $itemsRoundPrivilege.removeClass('section2__right__round_active');
    // $itemsPrivilege.removeClass('section2__right__item_active');
    // $(this).find('.section2__right__round').addClass('section2__right__round_active');
    // $(this).addClass('section2__right__item_active');
  });
  var swiper1 = new Swiper('.section3__slider .swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      depth: 865,
      modifier: 1.5,
      slideShadows: true
    }
  });
  var swiper2 = new Swiper('.section3__slider_bottom .swiper-container', {
    slidesPerView: 6,
    spaceBetween: 100,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    }
  }); // изменение высоты блока меню секции преимущества

  if (window.innerWidth > 480) {
    $('.section2__right').css('height', $('.section2__desktop').height() - $('.section2__header').height());
    $('.section3__right').css('height', $('.section3__wprapper').height() - $('.section3__right__header').height());
  } else {
    $('.section2__right').css('height', 'auto');
    $('.section3__right').css('height', 'auto');
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 480) {
      $('.section2__right').css('height', $('.section2__desktop').height() - $('.section2__header').height());
      $('.section3__right').css('height', $('.section3__wprapper').height() - $('.section3__right__header').height());
    } else {
      $('.section2__right').css('height', 'auto');
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
  $('.section2__header').animated("fadeInDown");
  $('.section2__left').animated("fadeInLeft");
  $('.section2__right').animated("fadeInRight");
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