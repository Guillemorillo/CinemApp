<template>
  <div class="basic-style">
    <header-component></header-component>
    <div class="content-inside">
      <banner-component :title="banner"></banner-component>
      <profile-component></profile-component>
    </div>
    <footer-component></footer-component>
    <div v-if="isLoading" class="load"><img src="~/assets/oval.svg" width="80" alt=""></div>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent, BannerComponent } from '~/components/common'
  import { ProfileComponent } from '~/components/profile'
  export default {
    data () {
      return {
        banner: 'Tu perfil',
        isLoading: true
      }
    },
    components: {
      HeaderComponent,
      BannerComponent,
      ProfileComponent,
      FooterComponent
    },
    mounted () {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      setTimeout(() => {
        this.isLoading = false
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
      }, 1000)
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
img {
  width: 100%;
}
.load {
  padding-top: 20%;
  padding-left: 47%;
  z-index: 1;
  position: absolute;
  width: 100%;
  height:100%;
  background-color: rgba(255,255,255,0.8);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
@media screen and (min-width: 850px){
  .content-inside {
    width: 90%;
  }
}
</style>
