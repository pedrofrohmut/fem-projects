<script>
  import { fixPrice } from "./utils"

  const { products } = $props()
</script>

<div class="product-list">
  {#each products as product}

    <div class="product-card">
      <div class="product-img-container">
        <picture>
          <source media="(width <= 480px)" srcset={product.image.mobile} />
          <source media="(width > 480px) and (width <= 800px)" srcset={product.image.tablet} />
          <img alt={product.name} src={product.image.desktop} />
        </picture>

        <button class="product-btn">
          <img alt="add to cart icon" src="assets/images/icon-add-to-cart.svg"/>
          Add to Cart
        </button>
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

.product-card img {
    border-radius: 8px;
}

.product-img-container {
    position: relative;
    margin-bottom: 1.6rem;
}

.product-btn {
    font-size: var(--fs-small);
    font-weight: var(--fw-bold);
    color: #484848;
    padding: 10px 0;
    border: 1px solid var(--clr-light-gray);
    border-radius: 999px;
    background-color: white;
    width: 150px;

    position: absolute;
    top: calc(100% - 25px);
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
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
