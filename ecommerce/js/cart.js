const cartCounter = document.querySelector(".navbar__cart-counter")
const cartContent = document.querySelector(".cart__content")

/*
    Update Cart Functions
*/

const incrementCartCounter = (amount) => {
    cartCounter.textContent = Number(cartCounter.textContent) + amount
    cartCounter.style.display = "block"
}

const decrementCartCounter = (amount) => {
    const newAmount = Number(cartCounter.textContent) - amount
    cartCounter.textContent = newAmount >= 0 ? newAmount : 0
    if (newAmount == 0) {
        cartCounter.style.display = "none"
    }
}

const setCartCounter = (amount) => {
    cartCounter.textContent = amount
    if (amount == 0) {
        cartCounter.style.display = "none"
    } else {
        cartCounter.style.display = "block"
    }
}

const setCartEmpty = () => {
    // Clean up modal
    while (cartContent.firstChild) {
        cartContent.removeChild(cartContent.lastChild)
    }

    const empty = document.createElement("div")
    empty.className = "cart__empty"
    empty.textContent = "Your cart is empty"
    cartContent.appendChild(empty)

    localStorage.setItem("currentId", 0)
}

const addItem = (item, ul) => {
    const li = document.createElement("li")
    li.className = "cart__item"

    const img = document.createElement("img")
    img.className = "cart__item-img"
    img.src = item.imageSrc

    const center = document.createElement("div")
    center.className = "cart__item-center"
    const name = document.createElement("div")
    name.className = "cart__item-name"
    name.textContent = item.name
    const price = document.createElement("span")
    price.textContent = "$" + item.price
    const amount = document.createElement("span")
    amount.textContent = " x " + item.qtd
    const total = document.createElement("strong")
    total.textContent = " $" + item.total
    center.appendChild(name)
    center.appendChild(price)
    center.appendChild(amount)
    center.appendChild(total)

    const del = document.createElement("button")
    del.className = "btn-icon cart__delete-btn"
    const delImg = document.createElement("img")
    delImg.className = "cart__delete-icon"
    delImg.src = "./images/icon-delete.svg"
    del.appendChild(delImg)
    del.addEventListener("click", () => {
        ul.removeChild(li)
        const updatedItems = JSON.parse(localStorage.getItem("cart")).filter(x => x.id != item.id)
        localStorage.setItem("cart", JSON.stringify(updatedItems))
        decrementCartCounter(1)
        if (updatedItems.length === 0) {
            setCartEmpty()
        }
    })

    li.appendChild(img)
    li.appendChild(center)
    li.appendChild(del)

    ul.appendChild(li)
}

const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    if (!cart || cart.length < 1) {
        setCartEmpty()
        return
    }

    const ul = document.createElement("ul")
    ul.classList.add("cart__list")
    cart.forEach(item => addItem(item, ul))

    const checkout = document.createElement("button")
    checkout.className = "cart__checkout btn btn-primary"
    checkout.textContent = "Checkout"

    const cartContent = document.querySelector(".cart__content")

    // Remove children before add to avoid duplicate elements on every update
    while (cartContent.firstChild) {
        cartContent.removeChild(cartContent.lastChild)
    }

    cartContent.appendChild(ul)
    cartContent.appendChild(checkout)

    setCartCounter(cart.length)
}

/*
    Controls for the cart modal
*/
const btnCart = document.querySelector(".navbar__cart")
const body = document.querySelector("body")

btnCart.addEventListener("click", () => {
    body.classList.toggle("cart-open")
})

/*
    Controls for product form
*/
const btnMinus = document.querySelector(".product__minus")
const btnPlus = document.querySelector(".product__plus")
const btnAddProduct = document.querySelector(".product__add-product")
const qtdText = document.querySelector(".product__quantity")

btnMinus.addEventListener("click", () => {
    const qtd = Number(qtdText.textContent)
    if (qtd > 0) {
        qtdText.textContent = qtd - 1
    }
})

btnPlus.addEventListener("click", () => {
    const qtd = Number(qtdText.textContent)
    qtdText.textContent = qtd + 1
})

btnAddProduct.addEventListener("click", () => {
    const qtd = Number(qtdText.textContent)
    if (qtd < 1) {
        return
    }

    const id = Number(localStorage.getItem("currentId") || 0) + 1
    const name = document.querySelector(".product__name").textContent
    const price = Number(document.querySelector(".product__price-primary").textContent.split("$")[1])
    const total = price * qtd
    const imageSrc = Array.from(document.querySelectorAll(".product-slider__list img"))[0].src
    const item = { id, name, price, qtd, total, imageSrc }

    const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(item)
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("currentId", id)

    qtdText.textContent = 0
    incrementCartCounter(1)
    updateCart()
})

/*
    Load cart on document load
*/
document.addEventListener("DOMContentLoaded", updateCart)
