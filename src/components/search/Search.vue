<template>
  <div class="search">
    <input
      class="search__input"
      type="search"
      :style="style"
      :placeholder="placeholder"
      tabindex="0"
      aria-label="Search"
      @keyup="onKeyUp"
      @search="onClear"
    />
    <em class="search__icon fas fa-search"></em>
  </div>
</template>

<script>
export default {
  name: "search",

  props: {
    width: {
      type: String,
      default: "100%"
    },
    placeholder: {
      type: String,
      default: "Search"
    }
  },

  computed: {
    style() {
      return {
        width: this.width
      };
    }
  },

  methods: {
    onKeyUp(e) {
      const { value } = e.target;

      if (value !== "") {
        this.$emit("search", value);
      } else {
        this.clearEv();
      }
    },

    onClear() {
      this.clearEv();
    },

    clearEv() {
      this.$emit("clear");
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  &__input {
    background-color: $light-grey;
    border: 1px solid $light-grey;
    border-radius: 10px;
    font-size: 0.875rem;
    margin: 0;
    padding: 0 3rem;
    height: 40px;
  }

  &__icon {
    color: $light-blue;
    position: relative;
    left: 24px;
    top: -28px;
  }
}
</style>
