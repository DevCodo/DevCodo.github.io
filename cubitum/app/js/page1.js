
$(function() {

/* управление кнопкой кейсов *//////////////////////////////////////////////////////////////////////////////

var works = document.getElementsByClassName("works__box")[0];

$('.works__element').click(function() {
    $('html, body').animate({scrollTop: works.getBoundingClientRect().top + window.pageYOffset - 100},500);

})

/* анимирование объектов *//////////////////////////////////////////////////////////////////////////////


var box = document.getElementsByTagName("main")[0];
var boxElements = document.getElementsByClassName("description__element")[0];
var element1 = document.getElementsByClassName("description__element__element1")[0];
var element2 = document.getElementsByClassName("description__element__element2")[0];
var element3 = document.getElementsByClassName("description__element__element3")[0];
var element4 = document.getElementsByClassName("description__element__element4")[0];
var element5 = document.getElementsByClassName("description__element__element5")[0];
var coordBox = boxElements.getBoundingClientRect()
var coordElement1 = element1.getBoundingClientRect()
var coordElement2 = element2.getBoundingClientRect()
var coordElement3 = element3.getBoundingClientRect()
var coordElement4 = element4.getBoundingClientRect()
var coordElement5 = element5.getBoundingClientRect()
var mousStartX;
var mousStartY;
var differenceX = 0;
var differenceY = 0;

box.addEventListener("mousemove", function(event) {

    if (mousStartX && mousStartY) {

            differenceX += mousStartX- event.clientX;
            differenceY += mousStartY- event.clientY;

            element1.style.left = coordElement1.left - coordBox.left + differenceX / 30 + "px";
            element1.style.top = coordElement1.top - coordBox.top + differenceY / 40 + "px";

            element2.style.left = coordElement2.left - coordBox.left + differenceX  / 20 + "px";
            element2.style.top = coordElement2.top - coordBox.top + differenceY  / 30 + "px";

            element3.style.left = coordElement3.left - coordBox.left + differenceX  / 50 + "px";
            element3.style.top = coordElement3.top - coordBox.top + differenceY  / 20 + "px";

            element4.style.left = coordElement4.left - coordBox.left + differenceX  / 40 + "px";
            element4.style.top = coordElement4.top - coordBox.top + differenceY  / 30 + "px";

            element5.style.left = coordElement5.left - coordBox.left + differenceX  / 30 + "px";
            element5.style.top = coordElement5.top - coordBox.top + differenceY  / 50 + "px";

    }
    mousStartX = event.clientX;
    mousStartY = event.clientY;

});

box.addEventListener("mouseout", function(event) {

});

box.addEventListener("mouseover", function(event) {
    
});

























});