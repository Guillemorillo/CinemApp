<template>
  <div>
    <main-page v-if="isAuthenticated"></main-page>
    <login v-if="!isAuthenticated"></login>
  </div>
</template>
<script>
  import login from '~/pages/login'
  import mainPage from '~/pages/mainPage'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: { mainPage, login },
    computed: {
      ...mapState(['user']),
      isAuthenticated () {
        return this.user
      }
    }
  }
</script>
