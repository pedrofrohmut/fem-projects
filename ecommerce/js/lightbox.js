/*
    Controls for lightbox gallery
*/

const lightboxFocus = document.querySelector(".lightbox__focus")
const lightboxImages = Array.from(document.querySelectorAll(".lightbox__img-wrapper"))
const lightboxPrev = document.querySelector(".lightbox__previous")
const lightboxNext = document.querySelector(".lightbox__next")
const galleryFocus = document.querySelector(".product-gallery__focus")
const lightboxClose = document.querySelector(".lightbox__close")

lightboxImages.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImages.forEach(x => {
            x.classList.remove("active")
        })
        img.classList.add("active")
        lightboxFocus.src = img.querySelector("img").src
    })
})

lightboxPrev.addEventListener("click", () => {
    let prev = null
    for (let x of lightboxImages) {
        if (x.classList.contains("active")) {
            break
        }
        prev = x
    }
    if (prev) {
        lightboxImages.forEach(x => x.classList.remove("active"))
        prev.classList.add("active")
        lightboxFocus.src = prev.querySelector("img").src
    }
})

lightboxNext.addEventListener("click", () => {
    let curr = null
    for (let x of lightboxImages) {
        if (curr != null) {
            lightboxImages.forEach(x => x.classList.remove("active"))
            x.classList.add("active")
            lightboxFocus.src = x.querySelector("img").src
            break
        }
        if (x.classList.contains("active")) {
            curr = x
        }
    }
})

galleryFocus.addEventListener("click", () => {
    document.querySelector("body").classList.add("lightbox-open")
})

lightboxClose.addEventListener("click", () => {
    document.querySelector("body").classList.remove("lightbox-open")
})
