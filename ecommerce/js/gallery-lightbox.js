/*
    Controls for image gallery
*/

const imageFocus = document.querySelector(".product-gallery__focus")
const images = Array.from(document.querySelectorAll(".product-gallery__img-wrapper"))

images.forEach(img => {
    img.addEventListener("click", () => {
        images.forEach(x => {
            x.classList.remove("active")
        })
        img.classList.add("active")
        imageFocus.src = img.querySelector("img").src
    })
})
