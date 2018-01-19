<template>
  <div class="authentication">
    <div class="title">
      CinemApp
    </div>
    <div class="formulary">
      <log-in-component v-if="!toSignUp"></log-in-component>
      <sign-up-component v-else></sign-up-component>
    </div>
    <div class="buttons">
      <button v-if="!toSignUp" @click="changeComponent">Crear cuenta</button>
      <button v-else @click="changeComponent">Usar cuenta existente</button>
    </div>
    
  </div>
</template>
<script>
import { LogInComponent, SignUpComponent } from '~/components/landing'

export default {
  components: {
    LogInComponent,
    SignUpComponent
  },
  data () {
    return {
      toSignUp: false
    }
  },
  methods: {
    changeComponent () {
      this.toSignUp = !this.toSignUp
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/sass/colors.scss";
  .authentication {
    background-color: $blueColor;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  .title {
    font-size: 3em;
    margin-bottom:15x;
    padding: 10px;
  }
  .formulary {
    padding: 20px;
    border: solid 3px white;
    border-radius: 30%
  }
  .buttons {
    margin-top: 15px;
  }
  .buttons button {
    border: none;
    background: none;
    color: white;
    cursor: pointer;
  }
</style>
