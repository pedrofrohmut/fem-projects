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
    // Toggle clicked
    menuParent.classList.toggle("open")

    // Close others
    const parents = Array.of(menuParents)[0] // Convert to array of li elem
    parents.forEach(parent => {
        if (parent !== menuParent) {
            parent.classList.remove("open")
        }
    })
}))
