<template>
  <div ref="circle" @click="click" @mouseover="mouseover" @mouseleave="mouseleave"
       class="vclapbtn-bin animated"
       :style="{boxShadow : isHover || isActive ? `${iconColor} 0 0 10px` : null, borderColor : iconColor}"
       :class="{pulse: clicking}">
    <div ref="btn" class="animated" :class="{tada: clicking}">
      <icon-base :iconColor="iconColor">
        <icon-love/>
      </icon-base>
    </div>
  </div>
</template>

<script>
  import * as util from '../assets/utils'
  import IconBase from './IconBase'
  import IconLove from './IconLove'

  export default {
    name: "vueClapButton",
    props: {
      iconColorActive: {
        type: String,
        default: "#F56C6C"
      },
      iconColorNormal: {
        type: String,
        default: "#909399"
      },
      maxClick: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        isHover: false,
        clicking: false,
        clickedTime: 0,
      }
    },
    computed: {
      isActive() {
        return this.clickedTime > 0;
      },
      iconColor() {
        return this.isActive || this.clicking ? this.iconColorActive : this.iconColorNormal;
      },
      isReachMaxClick() {
        return this.clickedTime >= this.maxClick;
      }
    },
    components: {
      IconLove,
      IconBase,
    },
    methods: {
      mouseleave() {
        this.isHover = false;
      },
      mouseover() {
        this.isHover = true;
      },
      click() {
        if (this.canClick()) {
          if (this.maxClick === 1 && this.isReachMaxClick) {
            this.cancelLove();
          } else {
            this.love();
          }
        }
      },
      cancelLove() {
        this.clickedTime = 0;
      },
      love() {
        this.clicking = true;

        setTimeout(() => {
          this.clickedTime ++;
          this.clicking = false;
        }, 1000)
      },
      canClick() {
        if (this.maxClick === 1) {
          return true;
        }
        return this.clickedTime < this.maxClick;
      },
    }
  }
</script>

<style scoped>
  .vclapbtn-bin {
    width: 50px;
    height: 50px;
    cursor: pointer;
    line-height: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
  }

  .vclapbtn-bin:hover {
    transition: all 1s;
  }

  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  .pulse {
    animation-name: pulse;
  }

  @keyframes swing {
    20% {
      transform: rotate(15deg)
    }

    40% {
      transform: rotate(-10deg)
    }

    60% {
      transform: rotate(5deg)
    }

    80% {
      transform: rotate(-5deg)
    }

    to {
      transform: rotate(0deg)
    }
  }

  .swing {
    transform-origin: top center;
    animation-name: swing
  }

  @keyframes tada {
    0% {
      transform: scaleX(1)
    }

    10%, 20% {
      transform: scale3d(.8, .8, .8) rotate(-3deg)
    }

    30%, 50%, 70%, 90% {
      transform: scale3d(1.2, 1.2, 1.2) rotate(3deg)
    }

    40%, 60%, 80% {
      transform: scale3d(1.2, 1.2, 1.2) rotate(-3deg)
    }

    to {
      transform: scaleX(1)
    }
  }

  .tada {
    animation-name: tada
  }

  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .animated.infinite {
    animation-iteration-count: infinite;
  }

</style>
