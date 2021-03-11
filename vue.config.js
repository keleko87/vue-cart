module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-cart/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/scss/_variables.scss";
        `
      }
    }
  }
};
