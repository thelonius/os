<template>
  <div id="app">
    <!-- <os-main/> -->
    <router-view />
    <!-- <img src="./assets/fonts/tune_iusto_cover.jpg" alt=""> -->
    <!-- <os-exp/> -->
  </div>
</template>

<script>
// import osMain from './components/home.vue'
// import osExp from './components/experiences.vue'

export default {
  name: "app",
  components: {
    // osMain,
    // osExp
  }
};
</script>

<style>
/* @font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-VF.woff2");
} */

a {
  text-decoration: none;
  color: black;
}
@font-face {
  font-family: "Hegval";
  src: url("assets/fonts/Hegval.otf");
}
@font-face {
  font-family: "mutabor";
  src: url("assets/fonts/Mutabor.otf");
}
@font-face {
  font-family: "myra";
  src: url("assets/fonts/Myra 4F Caps Bold.ttf");
}
@font-face {
  font-family: "myra-light";
  src: url("assets/fonts/Myra 4F Caps Light.ttf");
}
body {
  background: black;
  margin: 0;
  padding: 0;
}
#app {
  /* font-family: "Montserrat"; */
  /* font-size: 100%; */
  color: rgba(12, 12, 10, 0.8);
  /* font-weight: 400; */
  overflow: hidden;
}
</style>
