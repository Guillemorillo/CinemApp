<template>
  <div class="card">
    <div>
      <img class="poster" :src="moovie.src" :alt="moovie.title" v-show="loadedImage" @load="handleLoadedImage">
      <div class="spinner" v-show="loadingImage"><img src="~/assets/oval.svg" width="80" alt=""></div>
      <h1 class="title">{{ moovie.title }}</h1>
    </div>
    <div class="buttons">
      <transition name="bounce" mode="out-in">
        <i v-if="!heart" class="material-icons" @click="toList('favorites')" key="no-fav" >favorite_border</i>
        <i v-else class="material-icons" @click="toList('favorites')" key="fav">favorite</i>
      </transition>
      <transition name="bounce" mode="out-in">
        <i v-if="!seen" class="material-icons" @click="toList('seens')" key="no-seen">visibility_off</i>
        <i v-else class="material-icons" @click="toList('seens')" key="seen">visibility</i>
      </transition>
      <transition name="bounce" mode="out-in">
        <i v-if="!pend" class="material-icons" @click="toList('pendient')" key="no-list">queue</i>
        <i v-else class="material-icons" @click="toList('pendient')" key="list">playlist_add_check</i>
      </transition>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ['moovie', 'moovieKey'],
  data () {
    return {
      loadingImage: true,
      loadedImage: false,
      heart: false,
      seen: false,
      pend: false
    }
  },
  computed: {
    ...mapGetters({userId: 'isAuthenticated', favorites: 'getFavorite'})
  },
  methods: {
    ...mapActions(['addToList', 'unSetFromList']),
    handleLoadedImage () {
      this.loadingImage = false
      this.loadedImage = true
    },
    toList (to) {
      let info = {
        list: to,
        title: this.moovie.title,
        key: this.moovieKey,
        userUid: this.userId.uid
      }
      switch (to) {
        case 'favorites':
          this.heart = !this.heart
          this.heart ? this.addToList(info) : this.unSetFromList(info)
          break
        case 'seens':
          this.seen = !this.seen
          this.seen ? this.addToList(info) : this.unSetFromList(info)
          break
        case 'pendient':
          this.pend = !this.pend
          this.pend ? this.addToList(info) : this.unSetFromList(info)
          break
      }
    }
  },
  mounted () {
    if (this.favorites != null) {
      if (this.favorites[this.moovieKey]) {
        this.heart = true
      }
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
i {
  cursor: pointer;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@media screen and (min-width: 800px) {
  .card {
    width: 19%;
  }
}
@media (min-width: 1080px) {
  .card{
    width: 15%
  }
}
</style>
