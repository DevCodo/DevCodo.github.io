$(document).ready(function() {
    
    $("#portfolio_grid").mixItUp();
    
    $(".section_portfolio li").click(function() {
        $(".section_portfolio li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".popup").magnificPopup({type:'image'});
    $(".popup_content").magnificPopup();
    
    function hightDetect(){
        $(".main_head").css("height", $(window).height());
    };
    hightDetect();
    $(window).resize(function(){
        hightDetect();
    });
    
    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
    $(".animation_left").animated("fadeInLeft", "fadeOutLeft");
    $(".animation_right").animated("fadeInRight", "fadeOutRight");
    $(".animation_img").animated("flipInY", "flipOutY");
    $(".section_resume .left .resume_item").animated("fadeInLeft", "fadeOutLeft");
    $(".section_resume .right .resume_item").animated("fadeInRight", "fadeOutRight");
    
    $(".toggle_menu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    
    $(".top_menu ul a").click(function() {
        $(".top_menu").fadeOut(600);
        $(".top_menu ul").fadeOut(000);
        $(".sandwich").toggleClass("active");
        $(".top_text").removeClass("h_opacify");
    });
    
    $(".toggle_menu").click(function() {
        if ($(".top_menu").is(":visible")){
            $(".top_text").removeClass("h_opacify");
            $(".top_menu").fadeOut(600);
            $(".top_menu ul").fadeOut(000);
            $(".top_menu li a").removeClass("fadeInUp animated");
        } else{
            $(".top_menu").fadeIn(600);
            $(".top_menu ul").fadeIn(600);
            $(".top_text").addClass("h_opacify");
            $(".top_menu li a").addClass("fadeInUp animated");
        };     
    });
    
    $(".portfolio_item").each(function(i){
        $(this).find(".popup_content").attr("href", "#work_" + i);    
        $(this).find(".port_description").attr("id", "work_" + i);    
    });
    
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
    
    $(".top_menu li a").mPageScroll2id();
    
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

