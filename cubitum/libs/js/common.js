"use strict";

$(function () {
  /* управление шапкой */
  /////////////////////////////////////////////////////////////////////////////
  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 0) {
      $("header").css("backgroundColor", "#F1F1F1");
    } else if (window.pageYOffset == 0) {
      $("header").css("backgroundColor", "#fff");
    }
  });
  /* открытие, закрытие меню */
  /////////////////////////////////////////////////////////////////////////////

  $("main, .nav-menu__call, .nav-menu__batton-close, header, footer").click(function (event) {
    if (event.target.classList.contains("header__button-menu__item") || event.target.classList.contains("header__button-menu")) {
      $(".header__button-menu__item").toggleClass("header__button-menu__item_active");
      $(".nav-menu").toggleClass("nav-menu_active");
    } else {
      $(".nav-menu").removeClass("nav-menu_active");
      $(".header__button-menu__item").removeClass("header__button-menu__item_active");
    }
  });
});