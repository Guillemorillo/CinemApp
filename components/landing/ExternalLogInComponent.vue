<template>
  <div>
    <button type="button" class="btn btn-info send">Login con Facebook</button> <!--  @click="loginWithFacebook" -->
    <button type="button" class="btn btn-warning send" >Login con Google</button> <!-- @click="loginWithGoogle" -->
  </div>
</template>
<script type="text/javascript">
/* import firebaseApp from '~/firebaseapp'
import firebase from 'firebase'
export default {
  data () {
    return {
      error: ''
    }
  },
  methods: {
    loginWithFacebook () {
      this.loginWithProvider(new firebase.auth.FacebookAuthProvider())
    },
    loginWithGoogle () {
      this.loginWithProvider(new firebase.auth.GoogleAuthProvider())
    },
    loginWithProvider (provider) {
      firebaseApp.auth().signInWithPopup(provider)
      .then(result => this.$router.push('/'))
      .catch((error) => { this.error = error })
    },
    setError (error) {
      this.error = error.message
    }
  }
} */
</script> 
<style scoped lang='scss'>
.send {
  width: 91%;
  margin-top: 10px;
  height: 50px;
}
</style>
