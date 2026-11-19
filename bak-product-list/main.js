// Script to render the template
fetch("./data.json")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => product.price = product.price.toFixed(2))

        // Select the template script and compile it
        const templateSource = document.getElementById("items-template").innerHTML;
        const template = Handlebars.compile(templateSource);

        // Render the template with the data
        const renderedHtml = template({ products });

        // Insert the rendered HTML into the DOM
        document.getElementById("items-container").innerHTML = renderedHtml;

        // Set selected for item cards
        const addBtns = Array.from(document.querySelectorAll(".item-card__button-not-selected"))
        addBtns.forEach(addBtn => {
            addBtn.addEventListener("click", () => {
                addBtn.closest(".item-card").classList.add("selected")
            })
        })

        // Increment the item amount
        const incBtns = Array.from(document.querySelectorAll(".item-card__inc-btn"))
        incBtns.forEach(incBtn => {
            incBtn.addEventListener("click", () => {
                const amt = incBtn.parentElement.querySelector(".item-card__amount")
                amt.textContent = parseInt(amt.textContent) + 1
            })
        })

        // Decrement the item amount
        const decBtns = Array.from(document.querySelectorAll(".item-card__dec-btn"))
        decBtns.forEach(decBtn => {
            decBtn.addEventListener("click", () => {
                const amt = decBtn.parentElement.querySelector(".item-card__amount")
                const n = parseInt(amt.textContent)
                if (n >= 1) {
                    amt.textContent = n - 1
                }
                if (n - 1 < 1) {
                    const t = decBtn.closest(".item-card")
                    console.log(t)
                    t.classList.remove("selected")
                }
            })
        })
    })
