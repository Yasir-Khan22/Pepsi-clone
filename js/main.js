const burger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbar-left")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    navMenu.classList.toggle("active")
})