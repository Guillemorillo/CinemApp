<template>
  <div class="profile">
    <div class="p-img-cont">
      <img class="p-img" :src="imgAvatar()" alt="imagen de usuario">
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
      date: null
    }
  },
  components: {
    ChangesConfirmComponent
  },
  computed: {
    ...mapGetters({name: 'getDisplayName', avatar: 'getUserPhoto', email: 'getEmail', userData: 'getProfile'})
  },
  mounted: function () {
    this.$nextTick(function () {
      this.userName = this.name
      this.date = this.userData.bornDate
    })
  },
  methods: {
    ...mapActions(['updateUserName', 'updateProfileInfo']),
    imgAvatar () {
      if (this.avatar) {
        return this.avatar
      } else {
        return require('~/assets/img/foto-perfil.jpg')
      }
    },
    update () {
      this.updateUserName(this.userName)
      const newProfile = {
        bornDate: this.date
      }
      this.updateProfileInfo(newProfile)
      this.changes = false
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
}
.p-img-cont {
  width: 100%;
  text-align: center;
}
.p-img {
  border-radius: 30%;
  max-width: 95%;
}
.p-info {
  width: 100%;
}
.input-data {
  border: none;
  border-bottom: 1px solid $blueColor;
  width: 90%;
}
.save {
  color: $blueColor;
  border: 5px, solid, $blueColor;
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
}
</style>
