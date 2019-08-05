$(function() {
    
    var hreflocation = document.location.href;
    var $sections = $("section");
    var $navItem = $("nav").children();
    
    if (hreflocation.indexOf("#") != -1) {
        $sections.css("display", "none");
        $sections.eq( +hreflocation.slice(hreflocation.indexOf("#") + 1 ) ).css("display", "block");
    }

    $navItem.on("click", function() {
        $sections.css("display", "none");
        $sections.eq( $navItem.index( $(this) ) ).css("display", "block");
        $(".section__item_show").remove();
    })

    $('input[type="submit"]').on("click", function() {
        setLocation("#" + $('input[type="submit"]').index($(this)))
    })        

    function setLocation(curLoc){
        location.href = curLoc;
        location.hash = curLoc;
    }
})
