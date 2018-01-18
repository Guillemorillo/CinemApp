<template>
  <div class="footer">
    <div class="links">
      <nuxt-link to="/">Inicio</nuxt-link>
    </div>
    <div class="social">
      <a href="https://facebook.com/" target="_blank">Facebook</a>
      <a href="https://instagram.com/" target="_blank">Instagram</a>
      <a href="https://twitter.com/" target="_blank">twitter</a>
      <a href="https://googleplus.com/ " target="_blank">G+</i></a>
    </div>
</div>
</template>


<style lang='scss'>
@import "assets/sass/colors.scss";
.footer {
@extend .flexWrap;
background:$blueColor;
width: 100%;
padding:20px;
font-size: 1rem;
align-items: center;
justify-content:space-around;
clear: both;
}

.footer .links {
@extend .flexWrap;
}

.footer .links a {
flex-grow:1;
color:$whiteColor;
padding:10px;
text-align: center;
text-decoration:none;
}

.footer .social a {
color:$whiteColor;
text-decoration: none;
padding:10px;
display: inline-block;
}

@media screen and (min-width: 850px) {
  .footer {
		justify-content:space-between;
    align-items: center;
	}
}
</style>
