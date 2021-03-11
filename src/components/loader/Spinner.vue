<template>
  <div class="loader" v-if="loading">
    <div class="loader__spinner">
      <img src="@/assets/img/spinner.gif" alt="spinner image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "spinner",

  props: {
    loading: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.loader {
  &__spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    height: 50vh;
  }
}
</style>
