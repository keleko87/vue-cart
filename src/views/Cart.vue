<template>
  <div class="cart">
    <div class="cart__return-home">
      <button class="app-button app-button__return" @click="goToHome()">
        <em class="fas fa-chevron-circle-left cart__icon"></em>
        <span>Seguir comprando</span>
      </button>
    </div>
    <div v-if="!cartItems.length" class="cart__empty">
      <div class="cart__card-info">
        <h3>
          Tu cesta está vacía
        </h3>
        <p>Vuelve a nuestra lista de productos para añadir lo que desees.</p>
      </div>
    </div>

    <div v-else class="cart__content">
      <div class="cart__list">
        <product-list
          :list="cartItems"
          action="remove"
          @itemAction="removeItemCart($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const ProductList = () => import("@/components/product/ProductList");

export default {
  name: "cart",

  components: {
    ProductList
  },

  computed: {
    ...mapGetters({
      cartItems: "cart/items"
    })
  },

  methods: {
    ...mapActions({
      removeItemCart: "cart/removeItemCart"
    }),

    goToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped lang="scss">
.cart {
  max-width: $view-max-width;
  margin: 0 auto;

  &__return-home {
    display: flex;
    align-items: center;
  }

  &__empty {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 162px;
    padding: 1rem 3.5rem;
    border: 1px solid $light-grey;
    border-radius: 4px;
    color: $dark-grey;
  }
}
</style>
