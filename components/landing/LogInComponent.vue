<template>
  <div class="login-form">
    <div>
      <h3>LogIn</h3>
    </div>
    <div>
      <i class="material-icons ico">mail</i><input class="input" type="email" v-model="email" placeholder="Email" required>
    </div>
    <div>
      <i class="material-icons ico">&#xE88D;</i><input class="input" type="password" v-model="password" placeholder="Password" required>
    </div>
    <div class="enter">
      <button class="enter-button" @click="login">Entrar</button>
    </div>
    <div>
      <external-log-in-component></external-log-in-component>
    </div>
  </div>
</template>
<script>
import ExternalLogInComponent from '~/components/landing/ExternalLogInComponent'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['authenticate']),
    login () {
      let method = this.authenticate
      method({email: this.email, password: this.password})
      this.$router.push('/')
    }
  },
  components: {
    ExternalLogInComponent
  }
}
</script>
<style lang="scss" scoped>
@import "assets/sass/colors.scss";
  * > * {
    padding: 10px;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 15px;
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
