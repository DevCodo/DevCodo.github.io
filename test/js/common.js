var video = document.getElementsByClassName("video__iframe")[0];
var vectorLeft = document.getElementsByClassName("description__vector-left")[0];
var vectorRight = document.getElementsByClassName("description__vector-rigth")[0];
var sections = [...document.getElementsByClassName("description-section")];
var menu = document.getElementsByClassName("nav__menu-wrapper")[0];
var toggleMenu = document.getElementsByClassName("nav__menu-toggle")[0];
var closeMenu = document.getElementsByClassName("nav__menu-close")[0];
var header = document.getElementsByClassName("header")[0];


function resizeVideo() {
    video.style.height = parseInt(video.clientWidth * 1080 / 1920) + "px";
}

resizeVideo();
sections[0].style.display = "flex";
if (window.innerWidth < 992) {
    menu.style.display = "none";
}

window.addEventListener("scroll", function(event) {
    if (window.pageYOffset > 0) {
        header.style.backgroundColor = "#cececed8"
    } else if (window.pageYOffset == 0) {
        header.style.backgroundColor = "#F7F7F7"
    }
})

toggleMenu.addEventListener("click", function(event) {
    if (menu.style.display == "none") {
        menu.style.display = "block";
        menu.classList.add("show-menu")
        menu.classList.remove("close-menu")
    } else {
        menu.classList.remove("show-menu")
        setTimeout(() => {
            menu.style.display = "none"
        }, 500);
        menu.classList.add("close-menu")
    }
})

menu.addEventListener("click", function(event) {
    if (window.innerWidth > 992) return;
    if (event.target.tagName == "A" || event.target.tagName == "LI") {
        menu.classList.remove("show-menu")
        setTimeout(() => {
            menu.style.display = "none"
        }, 500);
        menu.classList.add("close-menu")
    }
})

closeMenu.addEventListener("click", function(event) {
    menu.classList.remove("show-menu")
    setTimeout(() => {
        menu.style.display = "none"
    }, 500);
    menu.classList.add("close-menu")
})



window.addEventListener("resize", function(event) {
    resizeVideo();
    if (window.innerWidth > 992) {
        menu.style.display = "block"
    } else {
        
        menu.style.display = "none"
    }
})

vectorRight.addEventListener("click", function(enent) {
    let sectionNow = document.querySelector(".description-section[hidden='false']");
    sectionNow.setAttribute("hidden","true");
    sectionNow.style.display = "none";
    if (sections.indexOf(sectionNow) < sections.length - 1) {
        sections[sections.indexOf(sectionNow) + 1].setAttribute("hidden","false");
        sections[sections.indexOf(sectionNow) + 1].style.display = "flex";
        video.setAttribute("src", sections[sections.indexOf(sectionNow) + 1].getAttribute("src"));
    } else {
        sections[0].setAttribute("hidden","false");
        sections[0].style.display = "flex";
        video.setAttribute("src", sections[0].getAttribute("src"));
    }
    
})

vectorLeft.addEventListener("click", function(enent) {
    let sectionNow = document.querySelector(".description-section[hidden='false']");
    sectionNow.setAttribute("hidden","true");
    sectionNow.style.display = "none";
    if (sections.indexOf(sectionNow) > 0) {
        sections[sections.indexOf(sectionNow) - 1].setAttribute("hidden","false");
        sections[sections.indexOf(sectionNow) - 1].style.display = "flex";
        video.setAttribute("src", sections[sections.indexOf(sectionNow) - 1].getAttribute("src"));
    } else {
        sections[sections.length - 1].setAttribute("hidden","false");
        sections[sections.length - 1].style.display = "flex";
        video.setAttribute("src", sections[sections.length - 1].getAttribute("src"));
    }

})
