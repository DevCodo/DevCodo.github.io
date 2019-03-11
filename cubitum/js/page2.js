"use strict";

$(function () {
  /* переключение кейсов */
  ////////////////////////////////////////////////////////////////////////
  var $sections = $(".case__info__content");
  $(".case__nav2").on("click", nextCase);
  $(".case__nav1").on("click", prevCase);
  showCase();

  function showCase() {
    $('html, body').animate({
      scrollTop: 0
    });
    var url = location.href;
    var caseId = url.slice(url.lastIndexOf("#"));
    var indexNow = $(".case__info__content").index($(caseId));
    $(".case__info__content:eq(".concat(indexNow, "), .case__description__content:eq(").concat(indexNow, ")")).prop("hidden", false);
    $(".case-show__mackbook__iframe, .case-show__iphone__iframe").attr("src", $sections.eq(indexNow).attr("src"));
  }

  function nextCase() {
    var $sectionNow = $(".case__info__content:not([hidden])");
    var indexNow = $(".case__info__content").index($sectionNow);
    $(".case__info__content:eq(".concat(indexNow, "), .case__description__content:eq(").concat(indexNow, ")")).prop("hidden", true);

    if (indexNow < $sections.length - 1) {
      $(".case__info__content:eq(".concat(indexNow + 1, "), .case__description__content:eq(").concat(indexNow + 1, ")")).prop("hidden", false);
      $(".case-show__mackbook__iframe, .case-show__iphone__iframe").attr("src", $sections.eq(indexNow + 1).attr("src"));
    } else {
      $(".case__info__content:eq(0), .case__description__content:eq(0)").prop("hidden", false);
      $(".case-show__mackbook__iframe, .case-show__iphone__iframe").attr("src", $sections.eq(0).attr("src"));
    }
  }

  function prevCase() {
    var $sectionNow = $(".case__info__content:not([hidden])");
    var indexNow = $(".case__info__content").index($sectionNow);
    $(".case__info__content:eq(".concat(indexNow, "), .case__description__content:eq(").concat(indexNow, ")")).prop("hidden", true);

    if (indexNow > 0) {
      $(".case__info__content:eq(".concat(indexNow - 1, "), .case__description__content:eq(").concat(indexNow - 1, ")")).prop("hidden", false);
      $(".case-show__mackbook__iframe, .case-show__iphone__iframe").attr("src", $sections.eq(indexNow - 1).attr("src"));
    } else {
      $(".case__info__content:eq(".concat($sections.length - 1, "), .case__description__content:eq(").concat($sections.length - 1, ")")).prop("hidden", false);
      $(".case-show__mackbook__iframe, .case-show__iphone__iframe").attr("src", $sections.eq($sections.length - 1).attr("src"));
    }
  }
  /* переключение кейсов свайпом*/
  ////////////////////////////////////////////////////////////////////////


  $(".case").on('touchstart', handleTouchStart); // А на движение пальцем по экрану - handleTouchMove      

  $(".case").on('touchmove', handleTouchMove);
  var xDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
  }

  function handleTouchMove(evt) {
    if (!xDown) return;
    var xUp = evt.touches[0].clientX;
    var xDiff = xDown - xUp;

    if (xDiff > 20) {
      nextCase();
    } else if (xDiff < -20) {
      prevCase();
    }

    xDown = null;
  }
  /* управление шириной iframe */
  ////////////////////////////////////////////////////////////////////////


  var $iframeMac = $(".case-show__mackbook__iframe");
  var $iframeIphone = $(".case-show__iphone__iframe");
  var $iframeWrapperIphone = $(".case-show__iphone__iframe_wrappper");
  var $iframeWrapperMac = $(".case-show__mackbook__iframe_wrappper");
  resizeIframe();
  $(window).resize(function () {
    resizeIframe();
  });

  function resizeIframe() {
    // $iframeMac.css("transform", `scale(${$iframeWrapperMac.innerWidth() / 1440 } )`)
    // $iframeIphone.css("transform", `scale(${$iframeWrapperIphone.innerWidth() / 375 })`)
    $iframeMac.css("transform", "scale(".concat(($iframeWrapperMac.innerWidth() + $iframeWrapperMac.innerWidth() / 1440 * getWidthScroll()) / 1440, " )"));
    $iframeIphone.css("transform", "scale(".concat(($iframeWrapperIphone.innerWidth() + $iframeWrapperIphone.innerWidth() / 375 * getWidthScroll()) / 375, ")"));
  }

  function getWidthScroll() {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollWidth;
  }
});