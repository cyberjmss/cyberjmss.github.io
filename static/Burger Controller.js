const menu = document.querySelector(".menu");
const showMenu = document.querySelector(".showMenu");
const Hamburger = document.querySelector(".HamBurg");
const menuItems = document.querySelectorAll(".menuItem");
const CloseIcon = document.querySelectorAll(".closeIcon");

function toggleHamburg() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menu.classList.add("CloseIcon");
    } else {
        menu.classList.add("showMenu");
        menu.classList.remove("CloseIcon");
    }}

Hamburger.addEventListener("click", toggleHamburg);

menuItems.forEach(item => {
    item.addEventListener("click", toggleHamburg);
})
