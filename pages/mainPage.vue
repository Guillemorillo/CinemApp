<template>
  <div class="main-page basic-style">
    <header-component></header-component>
    main page
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  export default {
    data () {
      return {}
    },
    components: {
      FooterComponent,
      HeaderComponent
    }
  }
</script>
<style>
.basic-style {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
