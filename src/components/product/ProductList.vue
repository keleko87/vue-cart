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
              class="app-button "
              :class="{
                'app-button__primary': action === 'add',
                'app-button__secondary': action === 'remove'
              }"
              @click="itemAction(item)"
            >
              <em
                class="app-button__icon fas"
                :class="{
                  'fa-cart-plus': action === 'add',
                  'fa-shopping-cart': action === 'remove'
                }"
              ></em>
              <span class="app-button__text">{{ buttonText }}</span>
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
    action: {
      type: String,
      default: "add"
    },
    list: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    buttonText() {
      return this.action === "add" ? "Añadir cesta" : "Eliminar";
    }
  },

  methods: {
    itemAction(item) {
      this.$emit("itemAction", item);
    }
  }
};
</script>

<style scoped lang="scss">
$grid-gap: 3rem;

.product-list {
  &__content {
    display: grid;
    grid-gap: $grid-gap;
    grid-template-columns: repeat(auto-fit, calc(100% - 2rem));
    justify-content: center;

    @media (min-width: #{$view-max-width}) {
      grid-template-columns: repeat(auto-fit, calc(50% - 2rem));
    }
  }
}
</style>
