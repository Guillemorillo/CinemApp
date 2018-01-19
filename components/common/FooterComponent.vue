<template>
  <div class="footer">
    <div class="links">
      <nuxt-link to="/">Inicio</nuxt-link>
    </div>
    <div class="social">
      <a href="https://facebook.com/" target="_blank"><i class="fa fa-facebook-square"></i></a>
      <a href="https://instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a>
      <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter-square"></i></a>
      <a href="https://googleplus.com/" target="_blank"><i class="fa fa-google-plus-square"></i></a>
    </div>
</div>
</template>


<style lang='scss'>
@import "assets/sass/colors.scss";
.footer {
@extend .flexWrap;
background:$blueColor;
width: 100%;
padding:10px;
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
font-size: 1.5em;
}

@media screen and (min-width: 850px) {
  .footer {
		justify-content:space-between;
    align-items: center;
	}
}
</style>
