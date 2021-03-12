<template>
  <div class="navbar-container">
    <navbar>
      <template slot="left-nav">
        <div class="navbar-container__content">
          <div class="navbar-container--margin-right">
            <img src="@/assets/img/logo.png" alt="logo image" />
          </div>
          <div>
            <p>FAKESTORE</p>
          </div>
        </div>
      </template>
      <template slot="right-nav">
        <button class="app-button app-button__default" @click="goToCart()">
          <em class="fas fa-shopping-cart app-button__icon"></em>
          <span class="app-button__text"
            >Mi cesta ({{ cartItems.length }})</span
          >
        </button>
      </template>
    </navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/navbar/Navbar";

export default {
  name: "navbar-container",

  components: {
    Navbar
  },

  computed: {
    ...mapGetters({
      cartItems: "cart/items"
    })
  },

  methods: {
    goToCart() {}
  }
};
</script>

<style scoped lang="scss">
.navbar-container {
  &__content {
    display: flex;
    align-items: center;
  }

  &--margin-right {
    margin-right: 0.5rem;
  }
}
</style>
