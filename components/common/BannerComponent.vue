<template>
  <div class="banner">
    <img class="banner-img" src="~/assets/img/logo/claquetab.png" alt="logo">
    <h2> {{ title }} </h2>
  </div>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang="scss" scoped>
@import "assets/sass/colors.scss";
.banner {
  width: 100%;
  background: $blueColor;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin-top: 1em;
  margin-bottom: 2em;
}
.banner-img {
  width: 3em;
  margin-right: 2em;
}
</style>
