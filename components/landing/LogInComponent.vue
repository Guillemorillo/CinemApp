<template>
  <div class="login-form">
    <div>
      <h3>LogIn</h3>
    </div>
    <div>
      <i class="material-icons ico">mail</i><input class="input" type="text" v-model="email" placeholder="Email">
    </div>
    <div>
      <i class="material-icons ico">&#xE88D;</i><input class="input" type="text" v-model="password" placeholder="Password">
    </div>
    <div class="enter">
      <button class="enter-button">Entrar</button>
    </div>
    <div>
      <external-log-in-component></external-log-in-component>
    </div>
  </div>
</template>
<script>
import ExternalLogInComponent from '~/components/landing/ExternalLogInComponent'
export default {
  data () {
    return {
      email: '',
      password: ''
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
  }
</style>
