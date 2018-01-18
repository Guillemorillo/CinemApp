<template>
  <div class="header">
    <div class="logo">
      <nuxt-link to="/" class="logomvl">CinemApp</nuxt-link>
    </div>
    <nav>
      <nuxt-link to="#menu" data-toggle="collapse" data-target="#menu" aria-expanded="false" aria-controls="menu"><i class="material-icons ico">&#xe5d2;</i></nuxt-link>
    </nav>
    <div id="menu" class="collapse mob-menu">
      <ul class="list-group">
        <nuxt-link to="/"><li class="list-group-item ul-menu"><i class="material-icons icon-l">&#xe5c3;</i>Inicio</li></nuxt-link>
      </ul>
    </div>

    <div class="menu">
      <nuxt-link to="/" class="line">Inicio</nuxt-link>
    </div>
  </div>
</template>

<script type="text/javascript">

</script>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";
.header {
  width: 100%;
  height: 70px;
  background: $blueColor;
  padding:10px;
  display: flex;
  justify-content:space-between;
  align-content:center;
  flex-direction:row;
  flex-wrap:nowrap;
}

.logo {
  font-size:30px;
  max-width: 240px;
  margin-left: 2%;
}
.logomvl {
  color: white;
  text-decoration: none;
}

.header nav {
  display: flex;
  width:30%;
  font-size: 30px;
  flex-direction: row-reverse;

}

.header nav a {
  text-align: right;
  border-radius: $whiteColor;
  color: $blueColor;
  text-decoration: none;
  padding:5px;
  margin-right: 2px;
}

.header nav i {
  font-size: 35px;
}

.header .menu{
  display: none;
}

.mob-menu {
  position:absolute;
  z-index:1;
  background-color:#fff;
  margin-left: -3em;
  margin-top: 65px;
  width: 130%;
  color: black;
}

.ul-menu {
  display:flex;
  align-items:center;
  background-color: #fff;
  padding: none;
  padding-left: 7em;
}

li .icon-l {
  float:right;
  margin-right: .8em;
  color:$blueColor;
}

.list-group a{
  color: black;
  text-decoration: none;
  background-color:#fff;
}

.ul-menu {
  background-color:#fff;
  border-left: none;
  border-right: none;
  border-top: none;
}

.ul-menu a:hover{
  color: grey;

}

.ico {
  color: white;
}

.send {
  background-color: transparent;
  border: 1px solid white;
}

@media screen and (min-width: 800px) {

  .header .mob-menu {
    display: none;
  }

  .header {
    padding: 10px;
    height: auto;
  }
  .header nav{
    display:none;
  }
  .header .menu{
    max-height: 48px;
    font-size: 1.2rem;
    width:60%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .header .menu a.line{
    font-weight: lighter;
    color:white;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
}
</style>
