<template>
  <div class="card">
    <div>
      <img class="poster" :src="moovie.src">
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
      heart: false,
      seen: false,
      pend: false
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
  max-width: 10%;
  text-align: center;
}
.poster {
  width: 100%;
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
</style>
