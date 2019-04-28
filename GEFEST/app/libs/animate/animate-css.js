//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");

"use strict";

function animate(elem, inEffect, outEffect, access) {
  var access = access || false;

  if (access) {
    elem.css("opacity", "0").addClass("animated").waypoint(function (dir) {
      if (dir === "down") {
        elem.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
      } else {
        elem.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
      }

      ;
    }, {
      offset: "80%"
    });
    elem.css("opacity", "0").addClass("animated").waypoint(function (dir) {
      if (dir === "down") {
        elem.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
      } else {
        elem.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
      }

      ;
    }, {
      offset: -$(window).height()
    });
  } else {
    elem.css("opacity", "0").addClass("animated").waypoint(function (dir) {
      if (dir === "down") {
        elem.addClass(inEffect).css("opacity", "1");
      }
    }, {
      offset: "80%"
    });
  }
};