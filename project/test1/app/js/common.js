document.addEventListener("DOMContentLoaded", function() {

    OverlayScrollbars(document.querySelectorAll('.money__main, body'), {
     
    });

    let Circle = function(sel){
      let circles = document.querySelectorAll(sel);
      [].forEach.call(circles,function(el){
          let valEl = el.getAttribute("data-persent");
          valEl = valEl*126/100;
          el.innerHTML = '<svg width="46" height="46"><circle transform="rotate(-90)" r="20" cx="-23" cy="23" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 126px;" r="20" cx="-23" cy="23" /></svg>';
          23
      });
    };
    Circle('.money__indicators__circle');











});