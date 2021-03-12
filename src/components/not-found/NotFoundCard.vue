<template>
  <div class="not-found-card">
    <div class="not-found-card__info">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "not-found-card",

  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.not-found-card {
  display: flex;
  align-items: center;
  justify-content: center;

  &__info {
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
