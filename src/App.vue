<template>
  <div id="app">
    <navbar-container />
    <router-view />
  </div>
</template>

<script>
import NavbarContainer from "@/components/navbar/NavbarContainer";

export default {
  name: "App",

  components: {
    NavbarContainer
  }
};
</script>

<style lang="scss">
@import "./styles/scss/index.scss";
</style>
