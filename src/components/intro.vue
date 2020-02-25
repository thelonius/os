<template>
  <div>
    <div class="container gradient anim">
      <canvas id="art">
      </canvas>
      <canvas id="noize">
      </canvas>
      <!-- <router-link
        class="os"
        to="/home"
      >
        <div>
          <span>Театральный кооператив </span>
          <span>"остаточное свечение"</span>
        </div>
      </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "osExp",
  props: {
    msg: String
  },
  data: function() {
    return {
      here: "о нас"
    };
  },
  methods: {
    noize: function() {
      const canvas = document.getElementById("noize");
      const ctx = canvas.getContext("2d");

      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      resize();
      window.onresize = resize;

      function noise(ctx) {
        var w = ctx.canvas.width,
          h = ctx.canvas.height,
          idata = ctx.createImageData(w, h),
          buffer32 = new Uint32Array(idata.data.buffer),
          len = buffer32.length,
          i = 0;

        for (; i < len; ) buffer32[i++] = ((255 * Math.random()) | 0) << 24;

        ctx.putImageData(idata, 0, 0);
      }

      var toggle = true;

      // added toggle to get 30 FPS instead of 60 FPS
      (function loop() {
        toggle = !toggle;
        if (toggle) {
          requestAnimationFrame(loop);
          return;
        }
        noise(ctx);
        requestAnimationFrame(loop);
      })();
    },
    canvas: function() {
      var canvas = document.getElementById("art");
      var ctx = canvas.getContext("2d");

      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;
      ctx.lineWidth = 300;

      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

      function mouseMove(evt) {
        var mousePos = getMousePos(canvas, evt);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
      }

      canvas.addEventListener("mousedown", function(evt) {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "normal 18px Verdana";
        // ctx.strokeText("HTML5 Canvas Text", 50, 90);
        ctx.fillText(
          "Театральный кооператив ОС",
          canvas.width / 2,
          canvas.height / 2
        );

        var mousePos = getMousePos(canvas, evt);
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
        evt.preventDefault();
        canvas.addEventListener("mousemove", mouseMove, false);
      });

      canvas.addEventListener(
        "mouseup",
        function() {
          canvas.removeEventListener("mousemove", mouseMove, false);
        },
        false
      );

      document.getElementById("reset").addEventListener(
        "click",
        function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        },
        false
      );

      var colors = [
        "red",
        "blue",
        "green",
        "purple",
        "yellow",
        "orange",
        "pink",
        "black",
        "white"
      ];
      var size = 200;
      var sizeNames = ["default", "three", "five", "ten", "fifteen", "twenty"];

      function listener(i) {
        document.getElementById(colors[i]).addEventListener(
          "click",
          function() {
            ctx.strokeStyle = colors[i];
          },
          false
        );
      }

      function fontSizes(i) {
        document
          .getElementById(sizeNames[i])
          .addEventListener("click", function() {}, false);
      }

      for (var i = 0; i < colors.length; i++) {
        listener(i);
      }

      for (var j = 0; j < size.length; j++) {
        fontSizes(j);
      }
    }
  },
  mounted: function() {
    this.noize();
    this.canvas();
  }
};
</script>
<style lang="scss" scoped>
#noize {
  // opacity: 0.5;
  // z-index: -1;
}
#art {
  z-index: 1;
}
canvas {
  grid-column: 1/-1;
  grid-row: 1/-1;
  // z-index: 20;
  // width: 100vw;
  // height: 100vh;
  // opacity: 60%;
  // border: 1px solid #000;
  position: relative;
  top: 0;
  bottom: 0;
}
body {
  background-color: #ebebeb;
  cursor: crosshair;
}
.container {
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  height: 100vh;
  width: 100vw;
}
.gradient {
  // background: rgb(238, 174, 202);
  // background: radial-gradient(
  //   circle,
  //   rgba(238, 174, 202, 1) 0%,
  //   rgba(148, 187, 233, 1) 100%
  // );
}
@keyframes pulse {
  0% {
    background-color: #001f3f;
  }
  50% {
    background-color: #ff4136;
  }
  100% {
    background-color: #001f3f;
  }
}
@keyframes filter {
  // 0% {
  //   filter: blur(3px);
  // }
  // 50% {
  //   filter: none;
  // }
  // 100% {
  //   filter: blur(3px);
  // }
}
.anim {
  z-index: -2;
  animation-name: pulse;
  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
}
.filter {
  animation-name: filter;
  animation-duration: 5s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-play-state: running;
}
.os {
  color: white;
  font-family: "Hegval";
  font-size: calc(10px + 6 * ((100vw - 320px) / 680));

  grid-row: 2;
  grid-column: 2;
  z-index: 3;
  cursor: pointer;
  margin: auto;
  :nth-child(1) {
    line-height: calc(10px + 6 * ((100vw - 320px) / 680));
    display: block;
    margin-bottom: 8px;
  }
  :nth-child(2) {
    display: block;
    line-height: calc(12px + 6 * ((100vw - 320px) / 680));
    // font-family: "mutabor";
  }
}
@media (max-width: 400px) {
  .os {
    // display: none;
    font-size: calc(1.8rem + 6 * ((100vw - 320px) / 680));
    :nth-child(1) {
      line-height: calc(2rem + 6 * ((100vw - 320px) / 680));
      margin-bottom: 12px;
    }
    :nth-child(2) {
      line-height: calc(2rem + 6 * ((100vw - 320px) / 680));
      // font-family: "mutabor";
    }
  }
}
</style>
