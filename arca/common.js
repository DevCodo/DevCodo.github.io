$(function() {
var $container = $(".container");
var $slider = $(".slider");
// var slider = document.querySelector(".slider");
var $img = $slider.children();
var $rotater = $("rotater");

$img.css("width", $container.width());
$slider.css("width", $container.width() * $img.length)


$container.on("mousemove", function(e) {
    var $thisSlider = $(this).find(".slider");
    if (e.offsetX > 100 && e.offsetX < 200) {
        $thisSlider.css("left", "-300px")
    }
    if (e.offsetX > 200) {
        $thisSlider.css("left", "-600px")
    }
    if (e.offsetX < 100) {
        $thisSlider.css("left", "0px")
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
    $container.on('touchmove', function(e) {
        var xUp = e.originalEvent.changedTouches[0].clientX;
        var xDiff = xDown - xUp;
        console.log(works.getBoundingClientRect().left)

        if (xDiff > 50) {
            // $slider.css("left", "0px")
            $slider.animate({
                left: works.getBoundingClientRect().left - 300 + "px"
              }, 500);
        } else if (xDiff < -50) {
            // $slider.css("left", "-300px")
            $slider.animate({
                left: works.getBoundingClientRect().left + 300 + "px"
              }, 500);
        }
    })
})




















    
})