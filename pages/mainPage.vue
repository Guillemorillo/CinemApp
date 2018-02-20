<template>
  <div class="basic-style">
    <header-component></header-component>
    <div class="content-inside">
      <banner-component :title="banner"></banner-component>
    </div>
    <item-component :moovie="moovie"></item-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent, BannerComponent } from '~/components/common'
  import { itemComponent } from '~/components/items'
  export default {
    data () {
      return {
        banner: 'Página principal',
        moovie: {
          src: require('~/assets/img/images.jpg'),
          title: 'Logan'
        }
      }
    },
    components: {
      FooterComponent,
      BannerComponent,
      HeaderComponent,
      itemComponent
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
