<template>
  <div class="list">
    <item-component v-for="(moovie, key) in moovies" :moovieKey="key" :key="moovie.title" v-if="moovie.title" :moovie="moovie"></item-component>
  </div>
</template>
<script>
import itemComponent from '~/components/items/itemComponent'
export default {
  props: ['moovies'],
  data () {
    return {}
  },
  components: {
    itemComponent
  }
}
</script>
<style lang="scss" scoped>
.list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 2em;
}
@media screen and (min-width: 800px) {
}
</style>
