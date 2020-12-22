<template>
  <div>
    <Menu />
    <div class="margenes">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isIndex() {
      return this.$route.name === "index";
    }
  }
};
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.center.examplex img {
  width: 90px;
}
.vs-navbar-content {
  border-radius: 0px;
}

.nav__dentro {
  background: #ddd;
}
.margenes {
  margin: 0px 250px 0px 250px;
}

@media (max-width: 1024px) {
  .margenes {
    margin: 0px 20px 0px 20px;
  }
}
</style>
