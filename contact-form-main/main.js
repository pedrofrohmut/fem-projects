const toggleErrorButton = document.getElementById("toggle-error-button")
const toggleSuccessButton = document.getElementById("toggle-success-button")
const body = document.querySelector("body")

toggleErrorButton.addEventListener("click", () => {
    body.classList.toggle("has-error")
})

toggleSuccessButton.addEventListener("click", () => {
    body.classList.toggle("is-success")
})
