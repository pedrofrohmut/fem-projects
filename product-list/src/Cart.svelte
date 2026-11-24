<script lang="ts">
  import type { Cart, Items } from "./types"

  type Props = {
    cart: Cart
  }

  const { cart }: Props = $props()
</script>

<div class="cart-card">
  <div class="cart-title">Your Cart ({cart.amount})</div>

  {#if cart.amount === 0}
    <div class="cart-content">
      <img alt="Empty Cart Illustration" src="./assets/images/illustration-empty-cart.svg"/>
      <div class="cart-message">Your added items will appear here</div>
    </div>
  {/if}

  {#if cart.amount > 0}
    <div>Cart not empty</div>
  {/if}
</div>

<style>
.cart-card {
    width: 310px;
    margin: 0 auto;
}

.cart-title {
    color: var(--clr-red);
    font-weight: var(--fw-bolder);
    font-size: var(--fs-large);
    margin-bottom: 1.8rem;
}

.cart-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
}

.cart-message {
    font-size: var(--fs-regular);
    color: var(--clr-rose-600);
}
</style>
