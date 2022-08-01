const menubar = document.querySelector("#bari")
const closebtn = document.querySelector(".closeicon")
const navmenu = document.querySelector(".navlinks")
const nav = document.querySelector(".nav")





menubar.addEventListener("click", openmenu)
closebtn.addEventListener("click", closemenu)

function closemenu() {
    navmenu.style.right = "-200px"
    closebtn.style.display = "none"
    menubar.style.display = "block"

}

function openmenu() {
    console.log("clicked")
    navmenu.style.right = "0px"
    closebtn.style.display = "block"
    menubar.style.display = "none"

}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-65px";
    }
    prevScrollpos = currentScrollPos;
}