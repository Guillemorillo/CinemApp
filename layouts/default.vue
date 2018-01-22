<template>
    <nuxt/>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['bindAuth'])
  },
  beforeMount () {
    this.bindAuth()
  }
}
</script>
