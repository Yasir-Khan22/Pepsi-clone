// Javascrpt File for project
const burger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbar-left")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


document.querySelectorAll(".items").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active")
    navMenu.classList.remove("active")
}))