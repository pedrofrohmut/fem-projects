/*
    Controls for slider on mobile
*/

const imageList = document.querySelector(".product-slider__list")
const btnPrev = document.querySelector(".product-slider__prev")
const btnNext = document.querySelector(".product-slider__next")

btnPrev.addEventListener("click", () => {
    const deviceWidth = imageList.offsetWidth
    const nextShowingWidth = imageList.scrollLeft % deviceWidth
    const leftToPrev = nextShowingWidth == 0 ? deviceWidth : nextShowingWidth
    imageList.scrollBy({
        left: leftToPrev * -1, // Negative to go right
        behavior: "smooth"
    })
})

btnNext.addEventListener("click", () => {
    const deviceWidth = imageList.offsetWidth
    const nextShowingWidth = imageList.scrollLeft % deviceWidth
    const leftToNext = deviceWidth - nextShowingWidth
    imageList.scrollBy({
        left: leftToNext,
        behavior: "smooth"
    })
})
