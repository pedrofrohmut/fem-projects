<script lang="ts">
  import productsData from "../data.json"

  import type { Product } from "./types.ts"

  import ProductList from "./ProductList.svelte"
  import Cart from "./Cart.svelte"

  const products = productsData.map((product, i) => ({ ...product, id: i + 1 })) as Array<Product>

  const initialCart = {
    amount: 0,
    items: [],
  }

  let cart = $state(initialCart)

  const handleAddToCart = (product) => {
    if (product.amount >= 99) return

    cart.amount += 1

    // Increment existing item
    const productInCart = cart.items.some(item => item.id === product.id)
    if (productInCart) {
      cart.items = cart.items.map(item =>
        item.id !== product.id ? item : { ...item, amount: item.amount + 1 }
      )
      return
    }

    // Add new item
    const { id, name, price, amount } = product
    cart.items = cart.items.concat({ id, name, amount: amount + 1, price })
  }

  const handleRemoveFromCart = (product) => {
    const productInCart = cart.items.some(item => item.id === product.id)

    if (!productInCart) return

    cart.amount -= 1

    cart.items = cart.items.reduce((acc, curr) => {
      if (curr.id !== product.id) {
        return acc.concat(curr)
      }

      if (curr.amount > 1) {
        return acc.concat({ ...curr, amount: curr.amount - 1 })
      }

      return acc
    }, [])
  }
</script>

<!-- <pre>{JSON.stringify(cart, null, 2)}</pre> -->

<div class="page-container">
  <div class="products-container">
    <div class="products-title">Desserts</div>
    <ProductList {products} {cart} {handleAddToCart} {handleRemoveFromCart} />
  </div>
  <Cart {cart} />
</div>

<style>
.page-container {
    --gap: 1.6rem;

    margin: 0 auto;
    padding: 2.5rem 0 5rem;
    max-width: 1200px;

    display: grid;
    grid-template-columns: 800px calc(400px - var(--gap));
    gap: var(--gap);
}

.products-title {
    font-size: 2.5rem;
    font-weight: var(--fw-bolder);
    margin-bottom: 2.5rem;
}

.products-container {
    max-width: 800px;
}
</style>
