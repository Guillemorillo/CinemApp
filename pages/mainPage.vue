<template>
  <div class="basic-style">
    <header-component></header-component>
    <div class="content-inside">
      <banner-component :title="banner"></banner-component>
      <div class="searcher">
        <i class="material-icons">search</i>
        <input v-model="searchTerm" class="input" type="search" placeholder="Buscar peli...">
      </div>
      <items-list-component :moovies="mooviesToDisplayPaginated"></items-list-component>
      <moovies-pagination-component @loadMore="onLoadMore" :hasMore="hasMore"></moovies-pagination-component>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent, BannerComponent } from '~/components/common'
  import { itemsListComponent, mooviesPaginationComponent } from '~/components/items'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        banner: 'Películas',
        searchTerm: '',
        pageSize: 10,
        actualPageSize: 10
      }
    },
    computed: {
      ...mapGetters({moovies: 'getMoovies'}),
      mooviesToDisplay () {
        return this.moovies.filter(moovie => {
          let title = moovie.title.toLowerCase()
          let term = this.searchTerm.toLowerCase()
          return title.indexOf(term) >= 0
        })
      },
      mooviesToDisplayPaginated () {
        return this.mooviesToDisplay.slice(0, this.actualPageSize)
      },
      hasMore () {
        return this.mooviesToDisplay.length > this.actualPageSize
      }
    },
    methods: {
      onLoadMore () {
        this.actualPageSize = this.actualPageSize + this.pageSize
      }
    },
    components: {
      FooterComponent,
      BannerComponent,
      HeaderComponent,
      itemsListComponent,
      mooviesPaginationComponent
    }
  }
</script>
<style lang="scss">
@import "assets/sass/colors.scss";
.basic-style {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: $darkBlue;
}
.content-inside {
  width: 100%;
  text-align: center;
  margin-bottom: 1.5em;
}
.searcher {
  width: 100%;
  color: white;
  text-align: center;
  margin-bottom: 1.5em;
}
.input {
  width: 80%;
  color: white;
  background: none;
  border: none;
  border-bottom: 1px white solid;
}
@media screen and (min-width: 850px){
  .content-inside {
    width: 90%;
  }
}
</style>
