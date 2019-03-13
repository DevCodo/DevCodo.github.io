$(function() {
var $container = $(".container");
var $slider = $(".slider");
var $img = $("img");
$img.css("width", "300px")


$container.on("mousemove", function(e) {
    console.log(e.offsetX)
    if (e.offsetX > 100 && e.offsetX < 200) {
        $slider.css("left", "-300px")
    }
    if (e.offsetX > 200) {
        $slider.css("left", "-600px")
    }
    if (e.offsetX < 100) {
        $slider.css("left", "0px")
    }
})

$container.on("touchmove", function(e) {
    // e.preventDefault();
    console.log(e.touches[0].clientX)
    if (e.touches[0].clientX > 100 && e.touches[0].clientX < 200) {
        $slider.css("left", "-300px")
    }
    if (e.touches[0].clientX > 200) {
        $slider.css("left", "-600px")
    }
    if (e.touches[0].clientX < 100) {
        $slider.css("left", "0px")
    }
})

















    
})