$(function() {
var $container = $(".container");
var $slider = $(".slider");
// var slider = document.querySelector(".slider");
var $img = $slider.children();
$img.css("width", $container.width());                     //задаем ширину картинкам
$slider.css("width", $container.width() * $img.length)     // задаем ширину слайдеру
$container.each(function() {                               // cоздаем item в ротатере                
    var $children = $(this).find("img");
    var $rotater = $(this).find(".rotater");
    for(let i = 0; i < $children.length; i++) {
        $rotater.append('<div class="item"></div>')
    }
    var $ItemsRotater = $rotater.children();
    $ItemsRotater.css("width", $rotater.width() / $children.length - 10 + "px");
    $ItemsRotater.eq(0).addClass("item_active")
})


$container.on("mousemove", function(e) {
    var $thisSlider = $(this).find(".slider");
    var $children = $(this).find("img");
    var $ItemsRotater = $(this).find(".rotater").children();

    if (e.offsetX > $container.width() / $children.length && e.offsetX < $container.width() / $children.length * 2) {
        $thisSlider.css("left", (-1 * $container.width()) + "px");
        $ItemsRotater.eq(0).removeClass("item_active");
        $ItemsRotater.eq(1).addClass("item_active");
        $ItemsRotater.eq(2).removeClass("item_active");
    }
    if (e.offsetX > $container.width() / $children.length * 2 && e.offsetX < $container.width() / $children.length * 3) {
        $thisSlider.css("left", (-2 * $container.width()) + "px");
        $ItemsRotater.eq(1).removeClass("item_active");
        $ItemsRotater.eq(2).addClass("item_active");
        $ItemsRotater.eq(3).removeClass("item_active");
    }
    if (e.offsetX > $container.width() / $children.length * 3 && e.offsetX < $container.width() / $children.length * 4) {
        $thisSlider.css("left", (-3 * $container.width()) + "px");
        $ItemsRotater.eq(2).removeClass("item_active");
        $ItemsRotater.eq(3).addClass("item_active");
        $ItemsRotater.eq(4).removeClass("item_active");
    }
    if (e.offsetX > $container.width() / $children.length * 4 && e.offsetX < $container.width() / $children.length * 5) {
        $thisSlider.css("left", (-4 * $container.width()) + "px");
        $ItemsRotater.eq(3).removeClass("item_active");
        $ItemsRotater.eq(4).addClass("item_active");
        $ItemsRotater.eq(5).addClass("item_active");
    }
    if (e.offsetX > $container.width() / $children.length * 5) {
        $thisSlider.css("left", (-5 * $container.width()) + "px");
        $ItemsRotater.eq(4).removeClass("item_active");
        $ItemsRotater.eq(5).addClass("item_active");
    }
    if (e.offsetX < $container.width() / $children.length) {
        $thisSlider.css("left", "0px");
        $ItemsRotater.eq($children.length).removeClass("item_active");
        $ItemsRotater.eq(0).addClass("item_active");
        $ItemsRotater.eq(1).removeClass("item_active");
    }
    
})

// $container.on("touchmove", function(e) {
//     // e.preventDefault();
//     console.log(e.touches[0].clientX)
//     if (e.touches[0].clientX > 100 && e.touches[0].clientX < 200) {
//         $slider.css("left", "-300px")
//     }
//     if (e.touches[0].clientX > 200) {
//         $slider.css("left", "-600px")
//     }
//     if (e.touches[0].clientX < 100) {
//         $slider.css("left", "0px")
//     }
// })

// $slider.on("mousedown", function(e) {
//   var posStart = e.pageX;
//   // console.log(posStart);
//   $slider.on("mousemove", function(e) {
//     var posDiff = e.pageX - posStart;
//     console.log(posDiff)
//     $slider.css("left", posDiff + "px")
//     $slider.on("mouseup", function(e) {

//     })
//   })
//   return false;
// })




/* var posStart, posDiff, count=1;
$slider.on("mousedown", mouseDown);

function mouseDown(e) {
  posStart = e.pageX;
  $slider.on("mousemove", mouseMove);
  return false;
}

function mouseMove(e) {
  posDiff = e.pageX - posStart ;
  if (count == 1) {
    $slider.css("left",  posDiff + "px")
  } else {
    $slider.css("left",  posDiff + $slider.position().left + "px")
  }
  
  
  if (posDiff > 150) {
    $slider.off("mousemove", mouseMove);
    $slider.animate({left: "300px"}, 500)
    count++;
  } else if (posDiff < -150) {
    $slider.off("mousemove", mouseMove);
    $slider.animate({left: "-300px"}, 500)
    count++;
  }
  $("body").on("mouseup", mouseUp);
  return false;
}

function mouseUp(e) {
  if (posDiff < 150 && posDiff > -150) {
    $slider.off("mousemove", mouseMove);
    $slider.animate({left: "0px"}, 500)
  }  
  
} */




$container.on('touchstart', function(e) {
    var xDown = e.originalEvent.changedTouches[0].clientX;
    var $thisSlider = $(this).find(".slider");
    $container.on('touchmove', function(e) {
        e.preventDefault();
        var xUp = e.originalEvent.changedTouches[0].clientX;
        var xDiff = xDown - xUp;

        if (xDiff > 100) {
            $slider.animate({
                left: parseInt($thisSlider.css("left")) - 300 + "px"
              }, 500);
        } else if (xDiff < -100) {
            $slider.animate({
                left: parseInt($thisSlider.css("left")) + 300 + "px"
              }, 500);
        }
    })
})
























    
})