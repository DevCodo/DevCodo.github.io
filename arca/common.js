$(function() {

var slider_proizvodstvo = (function(){
    var $container = $(".container");
    var $slider = $(".slider");
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

if (!('ontouchstart' in document.documentElement)) {
    $container.on("mousemove", function(e) {
        var $thisSlider = $(this).find(".slider");
        var $children = $(this).find("img");
        var $ItemsRotater = $(this).find(".rotater").children();
        var $posContainer = e.clientX - $(".container").offset().left;      /// замена e.offsetX на e.clientX ///!!!!!!!!!!!!!!!!!!!!
        
        if ($posContainer > $container.width() / $children.length && $posContainer < $container.width() / $children.length * 2) {
            $thisSlider.css("left", (-1 * $container.width()) + "px");
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(1).addClass("item_active");
        }
        if ($posContainer > $container.width() / $children.length * 2 && $posContainer < $container.width() / $children.length * 3) {
            $thisSlider.css("left", (-2 * $container.width()) + "px");
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(2).addClass("item_active");
        }
        if ($posContainer > $container.width() / $children.length * 3 && $posContainer < $container.width() / $children.length * 4) {
            $thisSlider.css("left", (-3 * $container.width()) + "px");
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(3).addClass("item_active");
        }
        if ($posContainer > $container.width() / $children.length * 4 && $posContainer < $container.width() / $children.length * 5) {
            $thisSlider.css("left", (-4 * $container.width()) + "px");
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(4).addClass("item_active");
        }
        if ($posContainer > $container.width() / $children.length * 5) {
            $thisSlider.css("left", (-5 * $container.width()) + "px");
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(5).addClass("item_active");
        }
        if ($posContainer < $container.width() / $children.length) {
            $thisSlider.css("left", "0px");
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(0).addClass("item_active");
        }
        
    })
}
    var xDown;
    $container.on('touchstart', touchStart);
    function touchStart(e) {
        xDown = e.originalEvent.changedTouches[0].clientX;
        $container.on('touchmove', touchMove);
        console.log(13)
        $container.off('touchstart', touchStart);               ///!!!!!!!!!!!!!!!!!!!!
    }

    function touchMove(e) {
        e.preventDefault();
        var $thisSlider = $(this).find(".slider");
        var $ItemsRotater = $(this).find(".rotater").children();
        var posLeft = parseInt($thisSlider.css("left"));
        var xUp = e.originalEvent.changedTouches[0].clientX;
        var xDiff = xDown - xUp;
        
      


        if (xDiff > 100) {
            if (parseInt($thisSlider.css("left")) > -$(this).width() * ($ItemsRotater.length -1)) {
                $container.off('touchmove', touchMove);
                $slider.animate({
                    left: parseInt($thisSlider.css("left")) - 300 + "px"
                }, 200);
                setTimeout(changeRotater.bind(this, $thisSlider), 250);
             /*    if (posLeft == 0) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(1).addClass("item_active");
                }
                if (posLeft == -$container.width()) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(2).addClass("item_active");
                }
                if (posLeft == -$container.width() * 2) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(3).addClass("item_active");
                }
                if (posLeft == -$container.width() * 3) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(4).addClass("item_active");
                }
                if (posLeft == -$container.width() * 4) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(5).addClass("item_active");
                } */
            }
        } else if (xDiff < -100) {
            if (parseInt($thisSlider.css("left")) < 0) {
                $container.off('touchmove', touchMove); 
                $slider.animate({
                    left: parseInt($thisSlider.css("left")) + 300 + "px"
                }, 200);
                setTimeout(changeRotater.bind(this, $thisSlider), 250);
            /*     if (posLeft == -$container.width()) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(0).addClass("item_active");
                }
                if (posLeft == -$container.width() * 2) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(1).addClass("item_active");
                }
                if (posLeft == -$container.width() * 3) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(2).addClass("item_active");
                }
                if (posLeft == -$container.width() * 4) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(3).addClass("item_active");
                }
                if (posLeft == -$container.width() * 5) {
                    $ItemsRotater.removeClass("item_active");
                    $ItemsRotater.eq(4).addClass("item_active");
                } */
            }
        }
    }

    function changeRotater($thisSlider) {
      var posLeft = parseInt($thisSlider.css("left"));
      var $container = $thisSlider.parent();
      var $ItemsRotater = $container.find(".rotater").children();
      $container.on('touchstart', touchStart);                                 ///!!!!!!!!!!!!!!!!!!!!

        if (posLeft == -$container.width()) {
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(1).addClass("item_active");
        }
        if (posLeft == -$container.width() * 2) {
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(2).addClass("item_active");
        }
        if (posLeft == -$container.width() * 3) {
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(3).addClass("item_active");
        }
        if (posLeft == -$container.width() * 4) {
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(4).addClass("item_active");
        }
        if (posLeft == -$container.width() * 5) {
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(5).addClass("item_active");
        }
        if (posLeft == 0) {
            $ItemsRotater.removeClass("item_active");
            $ItemsRotater.eq(0).addClass("item_active");
        }
    }

})();

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




// $container.on('touchstart', function(e) {
//     var xDown = e.originalEvent.changedTouches[0].clientX;
//     var $thisSlider = $(this).find(".slider");
//     $container.on('touchmove', function(e) {
//         e.preventDefault();
//         var xUp = e.originalEvent.changedTouches[0].clientX;
//         var xDiff = xDown - xUp;

//         if (xDiff > 100) {
//             console.log(parseInt($thisSlider.css("left")))
//             $slider.animate({
//                 left: parseInt($thisSlider.css("left")) - 300 + "px"
//               }, 500);
//         } else if (xDiff < -100) {
//             $slider.animate({
//                 left: parseInt($thisSlider.css("left")) + 300 + "px"
//               }, 500);
//         }
//     })
// })



/* var xDown;
$container.on('touchstart', touchStart);
function touchStart(e) {
    xDown = e.originalEvent.changedTouches[0].clientX;
    $container.on('touchmove', touchMove);
}

function touchMove(e) {
    e.preventDefault();
    var $thisSlider = $(this).find(".slider");
    var coordSlider = this.getBoundingClientRect().left;
    var xUp = e.originalEvent.changedTouches[0].clientX;
    var xDiff = xDown - xUp;
    console.log(e.originalEvent.changedTouches[0].clientX,coordSlider,xDown)
    $slider.css("left", e.originalEvent.changedTouches[0].clientX - xDown)

    if (xDiff > 100) {
        $container.off('touchmove', touchMove);
        $slider.animate({
            left: parseInt($thisSlider.css("left")) - 300 + "px"
          }, 500);
    } else if (xDiff < -100) {
        $container.off('touchmove', touchMove);
        $slider.animate({
            left: parseInt($thisSlider.css("left")) + 300 + "px"
          }, 500);
    }
}

function touchEnd(e) {
    
} */




















    
})