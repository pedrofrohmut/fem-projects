<script lang="ts">
  import type { Product, Cart } from "./types.ts"
  import { fixPrice } from "./utils"

  type Props = {
    products: Array<Product>
    cart: Cart
  }

  const { products, cart, handleAddToCart, handleRemoveFromCart }: Props = $props()

  let productsWithAmount = $derived.by(() => products.map(product => {
    const item = cart.items.find(item => item.id === product.id)
    const amount = item !== undefined ? item.amount : 0
    return { ...product, amount }
  }))
</script>

<!-- <pre>{JSON.stringify(productsWithAmount, null, 2)}</pre> -->

<div class="product-list">
  {#each productsWithAmount as product}

    <div class="product-card" class:active={product.amount > 0}>
      <div class="product-img-container">
        <picture class="product-image">
          <source media="(width <= 480px)" srcset={product.image.mobile} />
          <source media="(width > 480px) and (width <= 800px)" srcset={product.image.tablet} />
          <img alt={product.name} src={product.image.desktop} />
        </picture>

        {#if product.amount === 0}
          <button class="product-btn" onclick={() => handleAddToCart(product)}>
            <img alt="add to cart icon" src="assets/images/icon-add-to-cart.svg"/>
            Add to Cart
          </button>
        {:else}
          <div class="product-amount-btns">
            <button class="product-dec" onclick={() => handleRemoveFromCart(product)}>
              <img src="assets/images/icon-decrement-quantity.svg" alt="Decrement">
            </button>
            <span class="product-amount-text">{product.amount}</span>
            <button class="product-inc" onclick={() => handleAddToCart(product)}>
              <img src="assets/images/icon-increment-quantity.svg" alt="Increment">
            </button>
          </div>
        {/if}

      </div>

      <div class="product-category">{product.category}</div>
      <div class="product-name">{product.name}</div>
      <div class="product-price">$ {fixPrice(product.price)}</div>
    </div>

  {/each}
</div>


<style>
.product-list {
    max-width: 800px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1.6rem;
}

.product-card {
    font-size: var(--fs-regular);
    max-width: 250px;
}

.product-card.active .product-image img {
    border: 2px solid var(--clr-red);
}

.product-card img {
    border-radius: 8px;
}

.product-img-container {
    position: relative;
    margin-bottom: 1.6rem;
}

.product-amount-btns,
.product-btn {
    height: 45px;
    width: 160px;
    border-radius: 999px;

    position: absolute;
    top: calc(100% - 25px);
    left: 50%;
    transform: translateX(-50%);
}

.product-btn {
    font-size: var(--fs-small);
    font-weight: var(--fw-bold);
    color: #484848;
    border: 1px solid var(--clr-light-gray);
    background-color: white;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.product-amount-btns {
    background-color: var(--clr-red);
    color: white;
    padding: 0 14px;
    border: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-amount-btns button {
    border: 1px solid white;
    border-radius: 50%;
    background-color: var(--clr-red);
    height: 24px;
    width: 24px;
    padding: 0px;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.product-amount-btns button img {
    height: 12px;
    width: 12px;
}

.product-amount-text {
    font-weight: var(--fw-bold);
    font-size: var(--fs-small);
}

.product-category {
    color: var(--clr-rose-500);
    font-size: var(--fs-small);
    margin-bottom: 0.25rem;
}

.product-name {
    font-size: var(--fs-regular);
    margin-bottom: 0.25rem;
}

.product-price {
    color: var(--clr-red);
    font-weight: var(--fw-bold);
}
</style>
