"use strict";

$(function () {
  /* управление шапкой */
  ///////////////////////////////////////////////////////////////////////////
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
  /* обработка воода телефона в форму */
  /////////////////////////////////////////////////////////////////////////////

  function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }

  $(".tel").each(function () {
    $(this).mask("+7(999) 999-9999");
    $(this).on("click", function () {
      setSelectionRange(this, 3, 3);
    });
    $(this).on("keyup", function () {
      if ($(this).val() == "+7(8__) ___-____") {
        var e = $.Event("keydown", {
          keyCode: 8
        });
        $(this).trigger(e);
      }
    });
  });
  /* передача телефона из формы */
  ///////////////////////////////////////////////////////////////////////////// 

  $(".form_callback").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "../script/callBack.php",
      data: $(this).serialize(),
      // contentType: false,
      // cache: false,
      // processData: false,
      success: function success(result) {
        $(".tel").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      },
      error: function error() {
        // Данные не отправлены
        alert("Данные не отправлены");
        ;
      }
    });
  });
});