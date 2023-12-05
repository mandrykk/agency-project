const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const headerMenu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".header__menu-btn");
const headerMenuItem = document.querySelectorAll("li a");

menuBtn.addEventListener("click", () => {
    headerMenu.classList.toggle("show");
})

headerMenuItem.forEach((item) => {
    item.addEventListener("click", () => {
        headerMenu.classList.remove("show");
    });
})

