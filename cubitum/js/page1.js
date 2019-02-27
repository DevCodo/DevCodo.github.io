
$(function() {

/* управление кнопкой кейсов *//////////////////////////////////////////////////////////////////////////////

var works = document.getElementsByClassName("works__box")[0];

$('.works__element').click(function() {
    $('html, body').animate({scrollTop: works.getBoundingClientRect().top + window.pageYOffset - 100},500);

})

/* анимирование объектов *//////////////////////////////////////////////////////////////////////////////


var box = document.querySelector("main");
var boxElements = document.querySelector(".description__element");
var element1 = document.querySelector(".description__element__element1");
var element2 = document.querySelector(".description__element__element2");
var element3 = document.querySelector(".description__element__element3");
var element4 = document.querySelector(".description__element__element4");
var element5 = document.querySelector(".description__element__element5");
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
    resizeWidthelement();
    coordBox = boxElements.getBoundingClientRect();
    coordElement1 = element1.getBoundingClientRect();
    coordElement2 = element2.getBoundingClientRect();
    coordElement3 = element3.getBoundingClientRect();
    coordElement4 = element4.getBoundingClientRect();
    coordElement5 = element5.getBoundingClientRect();
    if (mousStartX && mousStartY) {

            differenceX += mousStartX- event.clientX;
            differenceY += mousStartY- event.clientY;

            element1.style.left = coordElement1.left - coordBox.left + differenceX / 20 + "px";
            element1.style.top = coordElement1.top - coordBox.top + differenceY / 20 + "px";

            element2.style.left = coordElement2.left - coordBox.left + differenceX  / 50 + "px";
            element2.style.top = coordElement2.top - coordBox.top + differenceY  / 50 + "px";

            element3.style.left = coordElement3.left - coordBox.left + differenceX  / 30 + "px";
            element3.style.top = coordElement3.top - coordBox.top + differenceY  / 30 + "px";

            element4.style.left = coordElement4.left - coordBox.left + differenceX  / 50 + "px";
            element4.style.top = coordElement4.top - coordBox.top + differenceY  / 30 + "px";

            element5.style.left = coordElement5.left - coordBox.left + differenceX  / 60 + "px";
            element5.style.top = coordElement5.top - coordBox.top + differenceY  / 50 + "px";

    }
    mousStartX = event.clientX;
    mousStartY = event.clientY;

});

/* box.addEventListener("mouseout", function(event) {

});

box.addEventListener("mouseover", function(event) {
    
}); */

/* изменение ширины SVG елементов *//////////////////////////////////////////////////////////////////////////////
var element1СoefWidth = 84 / 576;
var element2СoefWidth = 299 / 576;
var element3СoefWidth = 213 / 576;
var element4СoefWidth = 286 / 576;
var element5СoefWidth = 261 / 576;
var element1СoefHeight = 84 / 576;
var element2СoefHeight = 231 / 576;
var element3СoefHeight = 150 / 576;
var element4СoefHeight = 319 / 576;
var element5СoefHeight = 253/ 576;

resizeWidthelement();

window.addEventListener("resize", resizeWidthelement);

function resizeWidthelement() {
    element1.style.cssText = `width: ${boxElements.clientWidth * element1СoefWidth}px; height: ${boxElements.clientWidth * element1СoefHeight}px;`;
    element2.style.cssText = `width: ${boxElements.clientWidth * element2СoefWidth}px; height: ${boxElements.clientWidth * element2СoefHeight}px;`;
    element3.style.cssText = `width: ${boxElements.clientWidth * element3СoefWidth}px; height: ${boxElements.clientWidth * element3СoefHeight}px;`;
    element4.style.cssText = `width: ${boxElements.clientWidth * element4СoefWidth}px; height: ${boxElements.clientWidth * element4СoefHeight}px;`;
    element5.style.cssText = `width: ${boxElements.clientWidth * element5СoefWidth}px; height: ${boxElements.clientWidth * element5СoefHeight}px;`;
};

/* изменение ориентации телефона *//////////////////////////////////////////////////////////////////////////////

var mql = window.matchMedia("(orientation: portrait)");

if(mql.matches) {  
    // Портретная ориентация
} else {  
    // Горизонтальная ориентация
}

// Прослушка события изменения ориентации
mql.addListener(function(m) {
    if(m.matches) {
        // Изменено на портретный режим
        getCoordinateElements()
        window.addEventListener("deviceorientation", function(event) {
            // alpha: rotation around z-axis (от 0 до 360)
            var z = event.alpha;
            // gamma: left to right (от -90 до 90)
            var y = event.gamma;
            // beta: front back motion (от -180 до 180)
            var x = event.beta;
    
            handleOrientationEvent(x, y, z, true);
        });
    
    }
    else {
        // Изменено на горизонтальный режим
        getCoordinateElements()
        window.addEventListener("deviceorientation", function(event) {
            // alpha: rotation around z-axis (от 0 до 360)
            var z = event.alpha;
            // gamma: left to right (от -90 до 90)
            var y = event.gamma;
            // beta: front back motion (от -180 до 180)
            var x = event.beta;
    
            handleOrientationEvent(x, y, z, false);
        });
        
    }
});

function getCoordinateElements() {
    resizeWidthelement();
    coordBox = boxElements.getBoundingClientRect();
    coordElement1 = element1.getBoundingClientRect();
    coordElement2 = element2.getBoundingClientRect();
    coordElement3 = element3.getBoundingClientRect();
    coordElement4 = element4.getBoundingClientRect();
    coordElement5 = element5.getBoundingClientRect();
    
    element1.style.left = coordElement1.left - coordBox.left + "px";
    element1.style.top = coordElement1.top - coordBox.top + "px";

    element2.style.left = coordElement2.left - coordBox.left + "px";
    element2.style.top = coordElement2.top - coordBox.top + "px";

    element3.style.left = coordElement3.left - coordBox.left + "px";
    element3.style.top = coordElement3.top - coordBox.top + "px";

    element4.style.left = coordElement4.left - coordBox.left + "px";
    element4.style.top = coordElement4.top - coordBox.top + "px";

    element5.style.left = coordElement5.left - coordBox.left + "px";
    element5.style.top = coordElement5.top - coordBox.top + "px";
}

/* анимирование объектов на телефоне *//////////////////////////////////////////////////////////////////////////////

/* if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis (от 0 до 360)
        var z = event.alpha;
        // gamma: left to right (от -90 до 90)
        var y = event.gamma;
        // beta: front back motion (от -180 до 180)
        var x = event.beta;

        handleOrientationEvent(x, y, z);
    });
} */

var handleOrientationEvent = function(x, y, z, orientation) {

    if (!orientation) {
        let x = y;
        let y = x;
    };

    if (x >  90) { x =  90};
    if (x < -90) { x = -90};

    element1.style.left = coordElement1.left - coordBox.left + y * 0.6 + "px";
    element1.style.top = coordElement1.top - coordBox.top + x * 0.6 + "px";

    element2.style.left = coordElement2.left - coordBox.left + y * 0.3 + "px";
    element2.style.top = coordElement2.top - coordBox.top + x * 0.3 + "px";

    element3.style.left = coordElement3.left - coordBox.left + y * 0.5 + "px";
    element3.style.top = coordElement3.top - coordBox.top + x * 0.5 + "px";

    element4.style.left = coordElement4.left - coordBox.left + y * 0.3 + "px";
    element4.style.top = coordElement4.top - coordBox.top + x * 0.3 + "px";

    element5.style.left = coordElement5.left - coordBox.left + y * 0.1 + "px";
    element5.style.top = coordElement5.top - coordBox.top + x * 0.1 + "px";
}    



























});