<template>
  <div class="product-card">
    <div class="product-card__image">
      <img v-if="info.image" :src="info.image" alt="product image" />
    </div>
    <div class="product-card__info">
      <div class="product-card__title">
        <h4 :title="info.title">
          {{ info.title }}
        </h4>
      </div>
      <div class="product-card__description">
        <p>
          {{ info.description }}
        </p>
      </div>
      <p class="product-card__category">
        {{ info.type }}
      </p>
      <p class="product-card__price">
        {{ info.price }}
      </p>

      <div class="product-card__action">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-card",

  props: {
    info: {
      type: Object,
      validator: value => {
        if (
          value.title &&
          value.description &&
          value.price &&
          value.category &&
          value.image
        ) {
          return true;
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
$image-size: 144px;
$card-padding: 3rem;

.product-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: $white;
  border: 1px solid $light-grey;
  border-radius: 4px;
  padding: $card-padding;
  height: 386px;

  &__image {
    width: calc(#{$image-size} + (#{$card-padding}));

    img {
      height: auto;
      min-width: $image-size;
      width: 100%;
    }
  }

  &__info {
    height: 100%;
    margin-left: 3rem;
  }

  &__description {
    height: 46%;
    overflow: hidden;
  }
}
</style>
