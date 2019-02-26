

$(function() {

/* переключение кейсов */////////////////////////////////////////////////////////////////////////
var $sections = $(".case__info__content");

$(".case__nav2").click(function() {
    
    let $sectionNow = $(".case__info__content:not([hidden])");
    let indexNow = $(".case__info__content").index($sectionNow);
    $(`.case__info__content:eq(${indexNow}), .case__description__content:eq(${indexNow})`).prop("hidden", true);
    if (indexNow < $sections.length - 1) {
        $(`.case__info__content:eq(${indexNow + 1}), .case__description__content:eq(${indexNow + 1})`).prop("hidden", false);
        $(`.case-show__mackbook__iframe, .case-show__iphone__iframe`).attr("src", $sections.eq(indexNow + 1).attr("src"));
    } else {
        $(`.case__info__content:eq(0), .case__description__content:eq(0)`).prop("hidden", false);
        $(`.case-show__mackbook__iframe, .case-show__iphone__iframe`).attr("src", $sections.eq(0).attr("src"));
    }
})

$(".case__nav1").click(function() {
    
    let $sectionNow = $(".case__info__content:not([hidden])");
    let indexNow = $(".case__info__content").index($sectionNow);
    $(`.case__info__content:eq(${indexNow}), .case__description__content:eq(${indexNow})`).prop("hidden", true);
    if (indexNow > 0) {
        $(`.case__info__content:eq(${indexNow - 1}), .case__description__content:eq(${indexNow - 1})`).prop("hidden", false);
        $(`.case-show__mackbook__iframe, .case-show__iphone__iframe`).attr("src", $sections.eq(indexNow - 1).attr("src"));
    } else {
        $(`.case__info__content:eq(${$sections.length - 1}), .case__description__content:eq(${$sections.length - 1})`).prop("hidden", false);
        $(`.case-show__mackbook__iframe, .case-show__iphone__iframe`).attr("src", $sections.eq($sections.length - 1).attr("src"));
    }

})

/* управление шириной iframe */////////////////////////////////////////////////////////////////////////
var $iframeMac = $(".case-show__mackbook__iframe");
var $iframeIphone = $(".case-show__iphone__iframe");
var $iframeWrapperIphone = $(".case-show__iphone__iframe_wrappper");
var $iframeWrapperMac = $(".case-show__mackbook__iframe_wrappper");

resizeIframe();

$(window).resize(function() {
    resizeIframe();
})

function resizeIframe() {
    // $iframeMac.css("transform", `scale(${$iframeWrapperMac.innerWidth() / 1440 } )`)
    // $iframeIphone.css("transform", `scale(${$iframeWrapperIphone.innerWidth() / 375 })`)
    $iframeMac.css("transform", `scale(${($iframeWrapperMac.innerWidth() + ($iframeWrapperMac.innerWidth() / 1440 * getWidthScroll()) ) / 1440 } )`)
    $iframeIphone.css("transform", `scale(${($iframeWrapperIphone.innerWidth() + ($iframeWrapperIphone.innerWidth() / 375 * getWidthScroll()) ) / 375 })`)
}

function getWidthScroll() {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width =  '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    return scrollWidth;
}



















})
























