<template>
  <nav class="navbar">
    <div class="navbar__content">
      <div class="navbar__left-nav">
        <slot name="left-nav"></slot>
      </div>
      <div class="navbar__right-nav">
        <slot name="right-nav"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped lang="scss">
.navbar {
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: $darker-blue;
    border-radius: 10px;
    color: $white;
    height: 72px;
    max-width: $view-max-width;
    margin: 40px auto;
    padding: 0 1.5rem; // 24px;
  }
}
</style>
