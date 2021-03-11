<template>
  <div class="home">
    <div v-if="loading" class="home__spinner">
      <spinner :loading="loading" />
    </div>

    <div v-else class="home__content">
      <div class="home__list">
        <product-list :list="products" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const ProductList = () => import("@/components/product/ProductList");
const Spinner = () => import("@/components/loader/Spinner");

export default {
  name: "Home",

  components: {
    ProductList,
    Spinner
  },

  computed: {
    ...mapGetters({
      products: "product/list",
      loading: "product/loading"
    })
  },

  mounted() {
    this.findAllProduts();
  },

  methods: {
    ...mapActions({
      findAll: "product/findAll",
      setItemPage: "search/setItemPage"
    }),

    async findAllProduts() {
      await this.findAll();
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  &__list {
    max-width: $view-max-width;
    margin: 0 auto;
  }
}
</style>
