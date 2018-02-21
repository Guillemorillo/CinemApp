<template>
  <div class="basic-style">
    <header-component></header-component>
    <div class="content-inside">
      <banner-component :title="banner"></banner-component>
      <upload-item-component></upload-item-component>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent, BannerComponent } from '~/components/common'
  import UploadItemComponent from '~/components/upload/UploadItemComponent'
  export default {
    data () {
      return {
        banner: 'Subir una publicación'
      }
    },
    components: {
      FooterComponent,
      BannerComponent,
      HeaderComponent,
      UploadItemComponent
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
