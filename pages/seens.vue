<template>
  <div class="basic-style">
    <header-component></header-component>
    <div class="content-inside">
      <banner-component :title="banner"></banner-component>
      <items-list-component :moovies="seenMoovies"></items-list-component>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent, BannerComponent } from '~/components/common'
  import { itemsListComponent } from '~/components/items'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        banner: 'Vistas'
      }
    },
    methods: {
      ...mapActions(['seenPosts'])
    },
    computed: {
      ...mapGetters({ seenMoovies: 'getSeenMoovies' })
    },
    components: {
      FooterComponent,
      BannerComponent,
      HeaderComponent,
      itemsListComponent
    },
    mounted () {
      this.seenPosts()
    }
  }
</script>
<style>
.basic-style {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.content-inside {
  width: 100%;
}
@media screen and (min-width: 850px){
  .content-inside {
    width: 90%;
  }
}
</style>
