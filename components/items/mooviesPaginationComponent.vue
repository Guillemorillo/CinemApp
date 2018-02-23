<template>
  <div class="row">
    <div class="col">
      <button type="button" class="button" @click="onLoadMore" v-show="hasMore">cargar mas</button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['hasMore'],
    methods: {
      onLoadMore () {
        this.$emit('loadMore')
      }
    }
  }
</script>
