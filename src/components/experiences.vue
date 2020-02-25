<template>
  <div class="exps">
    <div class="anim"></div>
    <img v-if="e.pic" class="triggered" :src="e.pic" alt />
    <div class="events">
      <ul v-for="(event, index) in eventCatalogue" :key="index">
        <!-- Accordion Tab -->
        <li :class="{triggered: e === event}">
          <router-link :to="'event/' + event.slug" class="event-tile">
            <h2 @mouseover="trigger(event)">{{event.name}}</h2>
          </router-link>
          <!-- <p>{{event.slug}}</p> -->
          <!-- <img
          :src="pic[index]"
          alt="picture"
          >-->
        </li>
      </ul>
    </div>
    <!-- <div class="event-tiles">
      <div
        class="event-card check"
        v-for="(event, index) in eventCatalogue"
        :key="index"
      >
        <input
          type="radio"
          :id="event.slug"
          name="event"
        >
        <label
          class="tab-label"
          :for="event.slug"
        >
          <router-link
            :to="'event/' + event.slug"
            class="event-tile"
          >
          <span>
            {{event.eventName}}
          </span>
          </router-link>
        </label>
      </div>
    </div>-->
  </div>
</template>

<script>
import picPath0 from "../assets/pic/0.jpg";
import picPath1 from "../assets/pic/1.jpg";
import picPath2 from "../assets/pic/2.jpg";
import picPath3 from "../assets/pic/3.jpg";
import picPath4 from "../assets/pic/4.jpg";
import picPath5 from "../assets/pic/5.jpg";
import picPath6 from "../assets/pic/6.jpg";
import picPath7 from "../assets/pic/7.jpg";
import picPath8 from "../assets/pic/8.jpg";
import picPath9 from "../assets/pic/8.jpg";
import picPath10 from "../assets/pic/10.jpg";
import picPath11 from "../assets/pic/11.jpg";
import picPath12 from "../assets/pic/12.jpg";

export default {
  name: "osExp",
  props: {
    msg: String
  },
  data: function() {
    return {
      e: false,
      pic: [
        picPath0,
        picPath1,
        picPath2,
        picPath3,
        picPath4,
        picPath5,
        picPath6,
        picPath7,
        picPath8,
        picPath9,
        picPath10,
        picPath11,
        picPath12
      ],
      eventCatalogue: [
        {
          name: "Грубые энергии",
          date: "29.02 20:00",
          location: "клуб Blanc",
          announce:
            "Дамы и господа, добро пожаловать на Аукцион. Мы приготовили для вас шоу страстей, которое проведет вас по пути алчности и очищения. Мы не торгуем вещами. Материя не интересует нас. Мы специализируемся на душевных переживаниях. На нашем Аукционе  вы можете приобрести чужой опыт. То, что никогда не испытывали сами. И то, что останется с вами навсегда.  5 молодых людей — 5 откровенных историй. Воспоминания невинности, болотная эйфория, чувство спасения, привкус греха и отмщения. Все это может стать вашим.",
          underline:
            "50 зрителей получают 50 конвертов со случайно распределенной наличностью. Во время Аукциона вы можете докупать наличность, обменивая ее на настоящие",
          synopsis:
            "деньги в пределах разумного. Выиграв опыт, вы покидаете шоу, и отправляетесь по пути приобретенного переживания. Тем, кому не повезло, оказываются заинтересованными наблюдателями и тоже увлекательно проведут время. В цену билета включен фуршет.",
          durationMinutes: 90,
          ticketCost: 1000,
          team:
            "Театр ОС + Ася Ашман, Михаил Левин, ВасяРАН, Ромео Кастеллучи, Клэптон Эрик",
          slug: "vicarious-auction",
          pic: picPath12
        },
        {
          name: "24/7/365",
          slug: "24-7-365",
          pic: picPath11
        },
        {
          name: "Антишкола",
          slug: "antischool",
          pic: picPath5
        },
        {
          name: "Харизматический объект",
          slug: "charizmatic object",
          pic: picPath2
        }
      ]
    };
  },
  methods: {
    trigger: function(e) {
      this.e = e;
      let el = document.querySelector(".triggered");
      el.classList.remove("triggered");
    }
  },
  created: function() {
    // console.log(this.picPath);
  }
};
</script>
<style lang="scss" scoped>
.anim {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  opacity: 0.3;
  background: radial-gradient(rgb(44, 44, 44), #7e7e7e);
  background-size: 400% 100%;
  background-position: 50% 50%;
  -webkit-animation: AnimationName 21s ease infinite;
  -moz-animation: AnimationName 21s ease infinite;
  animation: AnimationName 21s ease-in-out infinite;
}
// @-webkit-keyframes AnimationName {
//   0% {
//     background-position: 76% 100%;
//   }
//   50% {
//     background-position: 65% 0%;
//   }
//   100% {
//     background-position: 76% 100%;
//   }
// }
// @-moz-keyframes AnimationName {
//   0% {
//     background-position: 65% 0%;
//   }
//   50% {
//     background-position: 76% 100%;
//   }
//   100% {
//     background-position: 65% 0%;
//   }
// }
@keyframes AnimationName {
  0% {
    // background-position: 100% 100%;
    background-size: 400% 100%;
  }
  50% {
    // background-position: 65% 0%;
    background-size: 400% 20%;
  }
  75% {
    // background-position: 76% 100%;
    // background-size: 200% 200%;
  }
  100% {
    // background-position: 76% 100%;
    // background-size: 100% 4%;
  }
}
span > a {
  font-weight: bold;
  color: white;
}
span.exp {
  a {
    font-weight: bold;
  }
}
.events {
  line-height: 2rem;
  align-self: center;
  grid-column: 2;
  grid-row: 2;
  z-index: 5;

  // display: none;
  // position: absolute;
}
.exps {
  // background: black;
  text-align: center;
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 30vw 40vw 30vw;
  grid-template-rows: 30vh 40vh 30vh;
  img {
    // -webkit-filter: blur(1px) contrast(0.85) hue-rotate(10deg) sepia(0.3);
    transition: all 3s ease-in-out;
    grid-row: 2;
    grid-column: 2;
    object-fit: cover;
    width: 40vw;
    height: 40vh;
  }
}
h2 {
  // text-transform: uppercase;
  font-family: "myra-light";
  // padding-top: 0.1rem;
  // font-style: normal;
  cursor: pointer;
  font-size: calc(10px + 6 * ((100vw - 20px) / 380));
  line-height: calc(10px + 6 * ((100vw - 20px) / 380));
  margin: 0;
}
.triggered > a > h2 {
  // font-style: italic;
  // text-transform: lowercase;
  padding-top: 10px;
  // line-height: 1rem;
  // display: none;
  // color: white;
  // background-color: black;
  font-family: "myra";
  font-weight: bold;
  font-size: calc(20px + 6 * ((100vw - 20px) / 380));
  line-height: calc(20px + 6 * ((100vw - 20px) / 380));

  // line-height: 3.6rem;
  // margin-top: 1rem;
  padding-bottom: 0.8rem;
  margin-bottom: -0.8rem;
}
ul {
  font-family: "Hegval";
  list-style: none;
  perspective: 900;
  padding: 0;
  margin: 0;
  li {
    a {
      color: white;
    }
    // line-height: 1rem;
    position: relative;
    padding: 0;
    margin: 0;
    // border-top: 1px dotted $grey;
    // @extend .flipIn;

    & ~ p {
      position: absolute;
      // display: block;
      // color: $white;
      font-size: 2em;
      line-height: 36px;
      letter-spacing: 1px;
      // position: relative;
      overflow: hidden;
      max-height: 800px;
      height: auto;
      // @extend .transition;
      opacity: 1;
      transform: translate(0, 0);
      // margin-top: 1.2em;
      z-index: 2;
    }
  }
}
@font-face {
  font-family: "mutabor";
  src: url("../assets/fonts/Mutabor.otf");
}
@font-face {
  font-family: "hegval";
  src: url("../assets/fonts/Hegval.otf");
}
@font-face {
  font-family: "myra";
  src: url("../assets/fonts/Myra 4F Caps Regular.ttf");
}
@media (max-width: 800px) {
  h2 {
    font-size: calc(20px + 6 * ((100vw - 20px) / 380));
    line-height: calc(20px + 6 * ((100vw - 20px) / 380));
  }
  .triggered > a > h2 {
    font-size: calc(30px + 6 * ((100vw - 20px) / 380));
    line-height: calc(30px + 6 * ((100vw - 20px) / 380));
  }
  .anim {
    position: absolute;
    top: 0;
  }
  .exps {
    grid-template-columns: 1vw 98vw 1vw;
    grid-template-rows: 1vh 98vh 1vh;
    img {
      // z-index: -3;
      width: 98vw;
      height: 98vh;
    }
  }
}
</style>
