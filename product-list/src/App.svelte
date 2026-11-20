<script lang="ts">
  import productsData from "../data.json"

  import type { Product } from "./types.ts"

  import ProductList from "./ProductList.svelte"
  import Cart from "./Cart.svelte"

  const products: Array<Product> = productsData.map((product, i) => Object.assign(product, { id: i + 1 }))

  const initialCart = {
    amount: 0,
    items: [],
  }
  let cart = $state(initialCart)
</script>

<div class="page-container">
  <div class="products-container">
    <div class="products-title">Desserts</div>
    <ProductList {products} />
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
