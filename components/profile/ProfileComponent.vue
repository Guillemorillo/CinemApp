<template>
  <div class="profile">
    <div class="p-img-cont">
      <img class="p-img" :src="userPhoto" alt="imagen de usuario">
      <input type="file" name="img" @change="onChangeImg($event.target.files)" ref="imageFile">
    </div>
    <div class="p-info">
      <h3>Nombre de usuario: </h3>
      <input type="text" class="input-data" v-model="userName" @change="onChange()">
      <h3>Email: </h3>
      <input type="email" class="input-data" :value="email" disabled>
      <h3>Fecha de nacimiento: </h3>
      <input type="date" class="input-data" v-model="date" @change="onChange()">
    </div>
    <div>
      <nuxt-link to="" data-toggle="modal" data-target="#confirm"><button class="save" @click="update()" v-if="changes">Guardar cambios</button></nuxt-link>
    </div>
    <changes-confirm-component></changes-confirm-component>
  </div>
</template>
<script>
import ChangesConfirmComponent from '~/components/profile/ChangesConfirmComponent'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      changes: false,
      userName: null,
      date: null,
      userPhoto: null,
      chagePhoto: false
    }
  },
  components: {
    ChangesConfirmComponent
  },
  computed: {
    ...mapGetters({name: 'getDisplayName', avatar: 'getUserPhoto', email: 'getEmail', userData: 'getUserData'})
  },
  mounted: function () {
    this.$nextTick(function () {
      this.userName = this.name
      this.avatar ? this.userPhoto = this.avatar : this.userPhoto = require('~/assets/img/foto-perfil.jpg')
      this.userData.bornDate ? this.date = this.userData.bornDate : this.date = '0001-01-01'
    })
  },
  methods: {
    ...mapActions(['updateUserName', 'updateProfileInfo', 'updatePhotoURL', 'uploadImage']),
    update () {
      const newProfile = {
        bornDate: this.date
      }
      this.updateUserName(this.userName)
      this.updatePhotoURL(this.userPhoto)
      this.updateProfileInfo(newProfile)
      this.changes = false
      this.chagePhoto = false
    },
    onChangeImg (files) {
      this.uploadImage({files: [...files], folder: 'profileImages'}).then(picUrls => {
        this.userPhoto = picUrls[0]
        this.chagePhoto = true
        this.changes = true
        this.$refs.imageFile.value = null
      })
    },
    onChange () {
      this.changes = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/sass/colors.scss";
* > * {
  margin-bottom: 1em;
}
.profile {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
}
.p-img-cont {
  width: 100%;
  text-align: center;
}
.p-img {
  border-radius: 30%;
  width: 95%;
}
.p-info {
  width: 100%;
}
.input-data {
  border: none;
  border-bottom: 1px solid #fff;
  width: 90%;
  color: white;
  background-color: $darkBlue;
}
.save {
  color: black;
  border: 5px, solid, #fff;
  border-radius: 20%;
  background: white;
  padding: 1em;
  cursor: pointer;
}

@media screen and (min-width: 850px) {
  .p-img-cont {
    width: 50%;
  }
  .p-info {
    width: 50%;
  }
  .p-img {
    width: 70%;
  }
}
</style>
