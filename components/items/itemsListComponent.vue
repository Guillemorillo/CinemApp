<template>
  <div class="list">
    <item-component :moovie="moovie"></item-component>
    <item-component :moovie="terminator"></item-component>
    <item-component :moovie="moovie"></item-component>
    <item-component :moovie="terminator"></item-component>
    <item-component :moovie="moovie"></item-component>
    <item-component :moovie="terminator"></item-component>
    <item-component :moovie="moovie"></item-component>
    <item-component :moovie="terminator"></item-component>
  </div>
</template>
<script>
import itemComponent from '~/components/items/itemComponent'
export default {
  data () {
    return {
      moovie: {
        src: require('~/assets/img/images.jpg'),
        title: 'Logan'
      },
      terminator: {
        src: require('~/assets/img/terminator.jpg'),
        title: 'Terminator 1'
      }
    }
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
