
$(function() {
/* управление шапкой *//////////////////////////////////////////////////////////////////////////////

window.addEventListener("scroll", function(event) {
    if (window.pageYOffset > 0) {
        $("header").css("backgroundColor", "#F1F1F1")
    } else if (window.pageYOffset == 0) {
        $("header").css("backgroundColor", "#F7F7F7")
    }
})

/* открытие, закрытие меню *//////////////////////////////////////////////////////////////////////////////

$("main, .nav-menu a,.nav-menu__call, header, footer").click(function(event) {

    if (event.target.classList.contains("header__button-menu__item") || event.target.classList.contains("header__button-menu")) {

        $(".header__button-menu__item").toggleClass("header__button-menu__item_active");
        $(".nav-menu").toggleClass("nav-menu_active");
        
    } else {

        $(".nav-menu").removeClass("nav-menu_active");
        $(".header__button-menu__item").removeClass("header__button-menu__item_active");
    }

})




})
























