document.querySelector(".bars__menu").addEventListener("click", animateBars);
document.querySelector(".back_menu").addEventListener("click", ocultar_menu);

let line1__bars = document.querySelector(".line1__bars-menu"); 
let line2__bars = document.querySelector(".line2__bars-menu"); 
let line3__bars = document.querySelector(".line3__bars-menu");
let bars__menu = document.querySelector(".bars__menu");

let nav = document.querySelector(".links");
let background_menu = document.querySelector(".back_menu");

let truev = {
        valor: true
    };

function animateBars () {
    line1__bars .classList.toggle("activeline1__bars-menu");
    line2__bars .classList.toggle("activeline2__bars-menu");
    line3__bars .classList.toggle("activeline3__bars-menu");
    bars__menu.classList.toggle("activeBars__menu")
    
    
    if (truev.valor === true) {
        nav.style.right = "0px"
        background_menu.style.display = "block";
        truev.valor = false
        console.log(truev)
    } else if (truev.valor === false) {
        nav.style.right = "-250px";
        background_menu.style.display = "none";
        truev.valor = true
    }

}

function ocultar_menu () {
    nav.style.right = "-250px";
    background_menu.style.display = "none";
    if (truev.valor === false) {
        line1__bars .classList.toggle("activeline1__bars-menu");
        line2__bars .classList.toggle("activeline2__bars-menu");
        line3__bars .classList.toggle("activeline3__bars-menu");
        truev.valor = true
    }
}