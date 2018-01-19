<template>
  <div class="signup-form">
    <div>
      <h3>SignUp</h3>
    </div>
    <div>
      <i class="material-icons ico">account_box</i><input class="input" type="text" v-model="nameUser" placeholder="Nombre de usuario">
    </div>
    <div>
      <i class="material-icons ico">mail</i><input class="input" type="text" v-model="email" placeholder="Email">
    </div>
    <div>
      <i class="material-icons ico">&#xE88D;</i><input class="input" type="text" v-model="password" placeholder="Password">
    </div>
    <div class="enter">
      <button class="enter-button">Registrar</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nameUser: '',
      email: '',
      password: ''
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
  }
</style>
