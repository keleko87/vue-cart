<template>
  <div class="cart">
    <div class="cart__return-home">
      <button class="app-button app-button__return" @click="goToHome()">
        <em class="fas fa-chevron-circle-left cart__icon"></em>
        <span>Seguir comprando</span>
      </button>
    </div>
    <div v-if="!cartItems.length" class="cart__empty">
      <not-found-card :title="notFound.title" :text="notFound.text" />
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
const NotFoundCard = () => import("@/components/not-found/NotFoundCard");

export default {
  name: "cart",

  components: {
    ProductList,
    NotFoundCard
  },

  data() {
    return {
      notFound: {
        title: "Tu cesta está vacía",
        text: "Vuelve a nuestra lista de productos para añadir lo que desees."
      }
    };
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
  &__return-home {
    display: flex;
    align-items: center;
    margin-bottom: 0.875rem;
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
