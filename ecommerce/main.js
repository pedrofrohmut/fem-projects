const body = document.querySelector("body")
const openMenuButton = document.querySelector(".navbar__menu-open")
const closeMenuButton = document.querySelector(".navbar__menu-close")

openMenuButton.addEventListener("click", () => {
    body.classList.add("menu-open")
})

closeMenuButton.addEventListener("click", () => {
    body.classList.remove("menu-open")
})
