<template>
  <div>
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
