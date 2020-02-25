<template>
  <!-- <div class="marginal">
    <div class="osbody">
      
      <div class="sotski-wrap">
        <instagram />
        <facebook />
        <vk />
      </div>
      <div class="navpoint">
        <router-link :to="{ name: 'experiences' }">опыты</router-link>
      </div>
      <div class="navpoint">
        <router-link :to="{ name: 'manifest' }">манифест</router-link>
      </div>
      <div class="navpoint">
        <router-link :to="{ name: 'about' }">о нас</router-link>
      </div>
    </div>
  </div>-->

  <div class="osproto">
    <div class="layout anim">
      <div class="cube first">
        <!-- <mdi-instagram />> -->
      </div>

      <span class="exp">
        <router-link :to="{ name: 'experiences' }">опыты</router-link>
      </span>
      <!-- <div class="exp">
      </div>-->
      <div class="cube second">
        <!-- <mdiInstagram></mdiInstagram> -->
      </div>
      <div class="insta-icon">
        <router-link :to="{url:instagram}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"
              fill="#000000"
            />
          </svg>
        </router-link>
      </div>
      <div class="line horizontal"></div>
      <div class="manifesto">
        <span>
          <router-link :to="{ name: 'manifest' }">манифест</router-link>
        </span>
      </div>
      <div class="about">
        <span>
          <router-link :to="{ name: 'about' }">о нас</router-link>
        </span>
      </div>
      <!-- <div class="line vertical"> -->
      <!-- <router-link> -->
      <div class="ticker-wrap line vertical">
        <div class="ticker">
          <div
            class="ticker__item"
          >осталось 39 дней до событыия: АУКЦИОН “ЧУЖОЕ”. 29 февраля 20:00 клуб Blanc…</div>
          <div
            class="ticker__item"
          >осталось 88 дней до события: 14 декабря 2020 полное солнечное затмение...</div>
        </div>
      </div>
      <!-- </router-link> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// const Instagram = require("mdi-vue/Instagram.vue");
import { mdiAccount } from "@mdi/js";

export default {
  name: "osMain",
  props: {
    msg: String
  },
  data: function() {
    return {
      svgPath: mdiAccount,
      here: "home"
    };
  },
  methods: {
    //   moveGradient = function() {
    //   var i = 1;
    //   var limit = 256; /* Sensitivity, higher is less*/
    //   var targetGradient = "#gradientA";
    //   var previousTargetGradient = targetGradient;
    //   /* Generates a random gradient and returns it in CSS syntax for linear-gradients. Adds 128 so colors will be lighter/pastel toned*/
    //   var newGradient = function() {
    //     var red = Math.floor(Math.random() * 128 + 128);
    //     var green = Math.floor(Math.random() * 128 + 128);
    //     var blue = Math.floor(Math.random() * 128 + 128);
    //     var angle = Math.floor(Math.random() * 360) + "deg";
    //     var hue = "rgb(" + red + "," + green + "," + blue + ")";
    //     var hue2 = "rgb(" + green + "," + blue + "," + red + ")";
    //     var value = "linear-gradient(" + angle + ", " + hue + ", " + hue2 + ")";
    //     return value;
    //   };
    //   /* Applies the gradient and toggles between the "selected" gradient*/
    //    var changeColor = function(target) {
    //     $(previousTargetGradient).css("z-index", -1);
    //     $(target).css("z-index", 0);
    //     $(target).css("background", newGradient());
    //     if(target=="#gradientA"){
    //       targetGradient = "#gradientB";
    //     } else if (target=="#gradientB"){
    //       targetGradient = "#gradientA";
    //     };
    //   };
    //   /*On mouse move, interpolates the opacity of both gradients*/
    //   document.onmousemove = handleMouseMove;
    //   function handleMouseMove(event) {
    //     $(targetGradient).css("opacity", (1-(i/limit)));
    //     $(previousTargetGradient).css("opacity", (i/limit));
    //     if (i < limit){
    //       i++;
    //     }    else if (i == limit){
    //       previousTargetGradient = targetGradient;
    //       changeColor(targetGradient);
    //       console.log("changing" + targetGradient);
    //       i = 1;
    //     }
    //     /* Debug - Shows current background-image and opacity values*/
    //     $("#g1").text("Gradient 1: " +
    //                   $("#gradientA").css('background-image') + " - " +
    //                   Math.floor(100 * ($("#gradientA").css('opacity'))) + "% opacity"
    //                  );
    //     $("#g2").text("Gradient 2: " +
    //                   $("#gradientB").css('background-image') + " - " +
    //                   Math.floor(100 * ($("#gradientB").css('opacity'))) + "% opacity"
    //                  );
    //    /* */
    //   }
    //    /*Initial color setup for background*/
    //   document.onload = changeColor("#gradientA");
    //   document.onload = changeColor("#gradientB");
    //  }
  },
  created: function() {}
};
</script>


<style lang="scss" scoped>
.anim {
  background: radial-gradient(#b696c1, #252732);
  background-size: 200% 500%;

  -webkit-animation: AnimationName 21s ease infinite;
  -moz-animation: AnimationName 21s ease infinite;
  animation: AnimationName 21s ease infinite;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 55% 0%;
  }
  50% {
    background-position: 46% 100%;
  }
  100% {
    background-position: 55% 0%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 55% 0%;
  }
  50% {
    background-position: 46% 100%;
  }
  100% {
    background-position: 55% 0%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 55% 0%;
  }
  50% {
    background-position: 46% 100%;
  }
  100% {
    background-position: 55% 0%;
  }
}
.osproto {
  // font-family: "Montserrat", sans-serif !important;
  // background: rgb(238, 174, 202);
  // background: radial-gradient(
  //   circle,
  //   rgba(238, 174, 202, 1) 0%,
  //   rgba(148, 187, 233, 1) 100%
  // );
}
.layout {
  font-size: calc(20px + 6 * ((100vw - 320px) / 680));
  font-family: "mutabor";
  display: grid;
  height: 100vh;
  width: 100vw;
  // background: lightgrey;
  grid-template-columns: 1rem 15vw 3vw 1fr 3em 0.2fr 1rem;
  grid-template-rows: 1rem 18vh 0.3fr 0.7fr 13vh 0.8fr 0.3fr 0.4fr 0.1fr 1rem;
  .about {
    // font-family: "Hegval", sans-serif !important;
    grid-column: 3 / 5;
    grid-row: 8;
    span {
      font-weight: 100;
    }
  }
  .insta-icon {
    grid-row: 5;
    grid-column: 3;
    margin-top: auto;
  }
  .manifesto {
    // font-family: "Montserrat", sans-serif !important;
    grid-column: 4;
    grid-row: 6;
    span {
      word-break: break-all;
      display: block;
      // width: 8rem;
      padding-top: 0.4rem;
      // line-height: 3.8rem;
      // font-size: 5rem;
    }
  }
  .exp {
    display: white;
    grid-column: 3/6;
    grid-row: 3;
    // vertical-align: bottom;
    // font-size: 11em;
    font-family: "myra";
    // word-wrap: break-word;
    align-self: flex-end;
    font-size: calc(48px + 12 * ((100vw - 270px) / 380));
    line-height: 60px;
  }
  span {
    a {
      &:hover {
        color: white;
      }
    }
  }
  .exp {
    // font-family: "Montserrat", sans-serif;
    display: flex;
    grid-column: 3/5;
    grid-row: 3;
    vertical-align: bottom;
    // font-size: 11em;
    // font-family: "myra";
  }
  .first {
    grid-column: 3;
    grid-row: 2;
    // background: black;
  }
  .second {
    grid-column: 3;
    grid-row: 5;
    // background: black;
  }
  .horizontal {
    border-top: black solid 4.5px;
    grid-column: 2 / -2;
    grid-row: 6;
  }
  .vertical {
    // border-left: black solid 5px;
    grid-column: 5;
    grid-row: 1 / -1;
    // width: 100vh;
  }
}
.marginal {
  display: flex;
  margin: 2rem 10vw;
  width: 100vw;
  height: initial;
}
.sotski-wrap {
  grid-area: ticker;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: space-between;
}
.navpoint {
  // grid-area: menu;
  grid-column: 2;
  // grid-row: 2;
  border-bottom: solid 10px #14103b;
  // margin: auto 0;
  // border: 4vmin solid lightgray;
  margin: 0 1rem;

  a {
    // height: 100%;
    // line-height: 1em;
    display: block;
    margin: 1rem;
    color: #14103b;
    // font-size: 3rem;
    font-weight: 600;
    font-size: calc(1.3rem + 1.8vw);
    // font-weight: bold;
    text-align: left;
    text-decoration: none;
    word-break: break-word;
  }
}
.osbody {
  transform: rotate(25deg);
  background: beige;
  width: 32vw;
  // transform: rotate(9deg);
  margin: auto;
  padding: 1rem 0;
  display: grid;
  grid-template-areas: "ticker menu" "ticker menu" "ticker menu";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10vh auto auto auto 10vh;
  grid-gap: 1rem;
  height: 100vh;
  // width: 100vw;
  // background: pink;
  :nth-child(3) {
    grid-row: 2;
  }
  :nth-child(4) {
    grid-row: 3;
  }
  :nth-child(5) {
    grid-row: 4;
  }
}
* {
  box-sizing: border-box;
}
$duration: 17s;

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  // grid-area: ticker;
  transform: rotate(-90deg);
  top: 0;
  // overflow: hidden;
  height: 4rem;
  // background-color: rgba(#000, 0.9);
  padding-left: 100%;
  box-sizing: content-box;
  .ticker {
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ticker;
    animation-duration: $duration;
    &__item {
      display: inline-block;
      padding: 0 2rem;
      font-size: 2.2rem;
      color: orangered;
    }
  }
}
body {
  padding-bottom: 5rem;
}
h1,
h2,
p {
  padding: 0 5%;
}
</style>
