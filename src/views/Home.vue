<template>
  <div class="home">
    <div v-if="loading" class="home__spinner">
      <spinner :loading="loading" />
    </div>

    <div v-else class="home__content">
      <div class="home__search">
        <search
          :placeholder="search.placeholder"
          @search="filterList({ query: $event, field: search.field })"
          @clear="clearFilteredList"
        />
      </div>

      <div v-if="!products.length" class="cart__empty">
        <not-found-card :title="notFound.title" :text="notFound.text" />
      </div>

      <div class="home__list">
        <product-list
          :list="products"
          action="add"
          @itemAction="addItemInCart($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const ProductList = () => import("@/components/product/ProductList");
const NotFoundCard = () => import("@/components/not-found/NotFoundCard");
const Spinner = () => import("@/components/loader/Spinner");
const Search = () => import("@/components/search/Search");

export default {
  name: "Home",

  components: {
    ProductList,
    NotFoundCard,
    Spinner,
    Search
  },

  data() {
    return {
      search: {
        field: "title",
        placeholder: "Buscar producto"
      },
      notFound: {
        title: "No se encontraron resultados",
        text: `Comprueba si lo que has escrito es correcto o prueba a realizar una nueva búsqueda.`
      }
    };
  },

  computed: {
    ...mapGetters({
      products: "product/listFiltered",
      loading: "product/loading"
    })
  },

  mounted() {
    this.findAllProduts();
  },

  methods: {
    ...mapActions({
      findAll: "product/findAll",
      filterList: "product/filterList",
      clearFilteredList: "product/clearFilteredList",
      addItemInCart: "cart/addItemInCart"
    }),

    async findAllProduts() {
      // Solo hacer la llamada a la API la primera vez
      if (!this.products.length) {
        await this.findAll();
      }
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  &__search {
    margin-bottom: 0.5rem;
  }
}
</style>
