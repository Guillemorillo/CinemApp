<template>
  <div class="signup-form">
    <div>
      <h3>SignUp</h3>
    </div>
    <div>
      <i class="material-icons ico">mail</i><input class="input" type="email" v-model="email" placeholder="Email">
    </div>
    <div>
      <i class="material-icons ico">&#xE88D;</i><input class="input" type="password" v-model="password" placeholder="Password">
    </div>
    <div>
      <i class="material-icons ico">today</i><input class="input" type="date" v-model="bornDate" placeholder="Fecha de nacimiento">
    </div>
    <div class="enter">
      <button class="enter-button" @click="addUser">Registrar</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: '',
      bornDate: ''
    }
  },
  methods: {
    ...mapActions(['createAuthUser']),
    addUser () {
      const newUser = {
        bornDate: this.bornDate
      }
      let method = this.createAuthUser
      method({email: this.email, password: this.password, newUser})
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/sass/colors.scss";
  * > * {
    padding: 10px;
  }
  .signup-form {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .input {
    border-style: none;
    background: none;
    color: white;
    border-bottom: solid 1px white;
  }
  ::placeholder {
    color: white;
  }
  .ico {
    font-size: 3em;
  }
  .enter-button {
    background: white;
    color: $blueColor;
    border-radius: 20%;
    border: none;
    cursor: pointer;
  }
</style>
