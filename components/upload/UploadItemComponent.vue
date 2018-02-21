<template>
  <div class="upload">
    <div class="up-img">
    <h2>* Caratula de la peli:</h2>
      <img v-if="uploadPhoto" :src="mooviePhoto" alt="caratula de pelicula" class="caratula">
      <input type="file" name="img" @change="onChangeImg($event.target.files)" ref="imageFile">
    </div>
    <div class="up-tit">
      <h2>* Titulo de la peli:</h2>
      <input type="text" v-model="title" @change="onChange()" class="input-data">
      <h2>Fecha de estreno:</h2>
      <input type="date" v-model="date" class="input-data">
      <h2>Director:</h2>
      <input type="text" v-model="director" class="input-data">
      <h2>Protas:</h2>
      <input type="text" v-model="starring" class="input-data">
      <h2>Sinopsis:</h2>
      <textarea rows="10" cols="50" v-model="sinopsis" class="input-data"></textarea>
      <p>* campo obligatorio</p>
      <p>Intente no subir pelis que ya hayan sido publicadas antes. Gracias.</p>
    </div>
    <div>
      <nuxt-link to="" data-toggle="modal" data-target="#confirm"><button class="save" @click="upload()" v-if="uploadName">subir publicación</button></nuxt-link>
    </div>
    <upload-confirm-component></upload-confirm-component>
  </div>
</template>
<script>
import UploadConfirmComponent from '~/components/upload/UploadConfirmComponent'
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      uploadName: false,
      uploadPhoto: false,
      mooviePhoto: null,
      title: '',
      date: '',
      director: '',
      starring: '',
      sinopsis: ''
    }
  },
  methods: {
    ...mapActions(['uploadImage', 'uploadMoovie']),
    onChangeImg (files) {
      this.uploadImage({files: [...files], folder: 'mooviesImages'}).then(picUrls => {
        this.mooviePhoto = picUrls[0]
        this.uploadPhoto = true
        this.$refs.imageFile.value = null
      })
    },
    onChange () {
      if (this.uploadPhoto) {
        this.uploadName = true
      }
    },
    upload () {
      const newMoovie = {
        src: this.mooviePhoto,
        title: this.title,
        user_id: '',
        date: this.date,
        director: this.director,
        starring: this.starring,
        sinopsis: this.sinopsis
      }
      this.uploadMoovie(newMoovie)
    }
  },
  computed: {
    ...mapGetters({userData: 'getUserData'})
  },
  components: {
    UploadConfirmComponent
  }
}
</script>
<style lang="scss" scoped>
@import "assets/sass/colors.scss";
.upload {
  color: $blueColor;
  margin-bottom: 2em;
}
.save {
  color: $blueColor;
  border: 5px, solid, $blueColor;
  border-radius: 20%;
  background: white;
  padding: 1em;
  cursor: pointer;
}
.input-data {
  border: none;
  border-bottom: 1px solid $blueColor;
  width: 90%;
  margin-bottom: 1em;
}
.caratula{
  width: 100%;
  margin-bottom: 1em;
}
.up-img{
  margin-bottom: 1em;
}
@media screen and (min-width: 850px) {
  .upload {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .caratula {
    width: 90%;
  }
.up-img {
  width: 49%;
}
.up-tit {
  width: 49%;
}
}
</style>
