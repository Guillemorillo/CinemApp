<template>
    <nuxt/>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  created () {
    if (process.browser) {
      window.onNuxtReady((app) => { this.bindAuth() })
    }
  },
  methods: {
    ...mapActions(['bindAuth'])
  },
  beforeMount () {
    this.bindAuth()
  }
}
</script>
