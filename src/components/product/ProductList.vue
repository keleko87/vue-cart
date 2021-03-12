<template>
  <div class="product-list">
    <div v-if="list.length" class="product-list__content">
      <div
        v-for="item in list"
        :key="item.id"
        class="product-list__content--item"
      >
        <product-card :info="item">
          <template slot="action">
            <button
              class="app-button app-button__primary"
              @click="addCart(item)"
            >
              <em class="fas fa-cart-plus app-button__icon"></em>
              <span class="app-button__text">Añadir cesta</span>
            </button>
          </template>
        </product-card>
      </div>
    </div>
  </div>
</template>

<script>
// Load the component when "v-if" return truthy value
const ProductCard = () => import("@/components/product/ProductCard");

export default {
  name: "product-list",

  components: {
    ProductCard
  },

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    addCart(item) {
      this.$emit("addCart", item);
    }
  }
};
</script>

<style scoped lang="scss">
$grid-gap: 2rem;

.product-list {
  &__content {
    display: grid;
    grid-gap: $grid-gap;
    grid-template-columns: repeat(auto-fit, calc(100% - #{$grid-gap}));
    justify-content: center;

    @media (min-width: #{$view-max-width}) {
      grid-template-columns: repeat(auto-fit, calc(50% - #{$grid-gap}));
    }
  }

  &__info {
    &--title {
      margin-bottom: 0.25rem;
    }
    &--text {
      margin-top: 0;
    }
  }
}
</style>
