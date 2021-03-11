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
    </navbar>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";

export default {
  name: "navbar-container",

  components: {
    Navbar
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
