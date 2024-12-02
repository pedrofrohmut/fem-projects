const navbar = document.querySelector("#navbar")
const menuOpen = navbar.querySelector("#menu-open")
const menuClose = navbar.querySelector("#menu-close")
const menuParents = navbar.querySelectorAll(".menu-parent")

menuOpen.addEventListener("click", () => {
    navbar.classList.add("open")
})

menuClose.addEventListener("click", () => {
    navbar.classList.remove("open")
})

menuParents.forEach(menuParent => menuParent.addEventListener("click", () => {
    menuParent.classList.toggle("open")
}))
