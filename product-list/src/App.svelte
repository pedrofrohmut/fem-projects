<script>
  import products from "../data.json"
</script>

<h1>Desserts</h1>

{#each products as product}

  <div class="product-card">
    <picture>
      <source media="(width <= 480px)" srcset={product.image.mobile} />
      <source media="(width > 480px) and (width <= 800px)" srcset={product.image.tablet} />
      <img alt={product.name} src={product.image.desktop} />
    </picture>

    <button class="product-btn">
      <img alt="add to cart icon" src="assets/images/icon-add-to-cart.svg"/>
      Add to Cart
    </button>

    <div class="product-category">{product.category}</div>
    <div class="product-name">{product.name}</div>
    <div class="product-price">$ {product.price}</div>
  </div>

{/each}

<style>
</style>
