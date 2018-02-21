<template>
  <div class="card">
    <div>
      <img class="poster" :src="moovie.src" :alt="moovie.title" v-show="loadedImage" @load="handleLoadedImage">
      <div class="spinner" v-show="loadingImage"><img src="~/assets/oval.svg" width="80" alt=""></div>
      <h1 class="title">{{ moovie.title }}</h1>
    </div>
    <div class="buttons">
      <div class="fav-btn"><i v-if="!heart" class="material-icons">favorite_border</i><i v-else class="material-icons">favorite</i></div>
      <div class="seen-btn"><i v-if="!seen" class="material-icons">visibility</i><i v-else class="material-icons">visibility_off</i></div>
      <div class="pend-btn"><i v-if="!pend" class="material-icons">queue</i><i v-else class="material-icons">playlist_add_check</i></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['moovie'],
  data () {
    return {
      loadingImage: true,
      loadedImage: false,
      heart: false,
      seen: false,
      pend: false
    }
  },
  methods: {
    handleLoadedImage () {
      this.loadingImage = false
      this.loadedImage = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/sass/colors.scss";
.card {
  background: $blueColor;
  color: white;
  font-size: 12px;
  max-width: 49%;
  width: 49%;
  text-align: center;
  margin-bottom: 1.5em;
}
.poster {
  width: 100%;
  height: 300px;
  border-bottom: 1px solid white;
}
.title {
  font-size: 1.5em;
  margin-top: 0.5em;
  padding-bottom: 0.25em;
  border-bottom: 1px solid white;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media screen and (min-width: 800px) {
  .card {
    width: 19%;
  }
}
</style>
