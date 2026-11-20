<script>
  import products from "../data.json"

  import ProductList from "./ProductList.svelte"
</script>

<div class="page-container">
  <div class="products-container">
    <div class="products-title">Desserts</div>
    <ProductList {products} />
  </div>
</div>

<style>
.page-container {
    margin: 2.5rem auto 5rem;
    max-width: 1200px;
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
