<template>
  <div class="vclapbtn-bin-wrap" :style="{width : `${size}px`, height: `${size}px`}"
       @mouseenter="isAllHover = true" @mouseleave="isAllHover = false">
    <div class="counter bounceInUp animated"
         v-if="maxClick > 1"
         v-show="clickedTime > 0 && isHover"
         :style="{left: `${size / 2}px`, top: `-18px`, color: `${colorNormal}`}">
      +{{clickedTime}}
    </div>
    <icon-chips ref="chips" :size="size"/>
    <cancel-love :size="size" :colorNormal="colorNormal" :colorActive="colorActive"
                 v-if="isShowCancelLove" @cancel="cancelLove()" />

    <div ref="circle" @click="click" @mouseenter="mouseenter" @mouseleave="mouseleave"
         class="vclapbtn-bin animated infinite"
         :style="{boxShadow : isHover && isHaveBorder ? `${iconColor} 0 0 10px` : null,
                border : isHaveBorder ? `1px solid ${iconColor}` : null,
                width: `${size - 4}px`,
                height: `${size - 4}px`,
                margin: '2px',
                position: 'relative',
                boxSizing: 'border-box',
                backgroundColor: `${bgColor}`,
                lineHeight: `${size - 4}px`}"
         :class="{pulse: clicking}">
      <div ref="btn" class="animated" :class="{tada: clicking}">
        <icon-base :iconColor="iconColor">
          <icon-love v-if="icon === 'love'"/>
          <icon-star v-if="icon === 'star'"/>
          <icon-good v-if="icon === 'good'"/>
        </icon-base>
      </div>
    </div>
  </div>
</template>

<script>
  import * as util from '../assets/utils'
  import IconBase from './IconBase'
  import IconLove from './icons/IconLove'
  import IconGood from './icons/IconGood'
  import IconStar from './icons/IconStar'
  import IconChips from './IconChips'
  import CancelLove from './CancelLove'

  export default {
    name: "vueClapButton",
    components: {
      IconLove,
      IconBase,
      IconChips,
      CancelLove,
      IconGood,
      IconStar,
    },
    props: {
      icon: {
        type: String,
        default: 'good'
      },
      colorActive: {
        type: String,
        default: "#F56C6C"
      },
      colorNormal: {
        type: String,
        default: "#909399"
      },
      bgColor: {
        type:String,
        default: "#FFF"
      },
      maxClick: {
        type: Number,
        default: 1
      },
      size: {
        type: Number,
        default: 50
      },
      supportCancel: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        isAllHover: false,
        isHover: false,
        clicking: false,
        clickedTime: 0,
        mouseEnterClickTimes: 0,
      }
    },
    computed: {
      isActive() {
        return this.clickedTime > 0;
      },
      iconColor() {
        return this.isActive || this.clicking ? this.colorActive : this.colorNormal;
      },
      isReachMaxClick() {
        return this.clickedTime >= this.maxClick;
      },
      isShowCancelLove() {
        return this.isSupportCancel && this.isAllHover && this.clickedTime > 0 && this.maxClick > 1 && this.mouseEnterClickTimes === 0;
      },
      isSupportCancel() {
        return this.supportCancel && this.size >= 40;
      },
      isHaveBorder() {
        return this.size >= 40;
      }
    },
    created() {
      this.debounceEffect = util.debounce(this._debounceEffect, 300);
      this.debounceLoveOver = util.debounce(this._debounceLoveOver, 1000);
      let iconsList = ['good', 'love', 'star'];
      this.icon = this.icon.toLowerCase();
      if (iconsList.indexOf(this.icon) === -1) {
        this.icon = iconsList[0];
      }
    },
    methods: {
      mouseleave() {
        this.isHover = false;
      },
      mouseenter() {
        this.isHover = true;
        this.mouseEnterClickTimes = 0;
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
      getClaps() {
        return this.clickedTime;
      },
      cancelLove() {
        this.clickedTime = 0;
        this.$emit("cancel");
      },
      love() {
        this.clicking = true;
        this.clickedTime++;
        this.mouseEnterClickTimes++;
        this.$emit("clap", this.clickedTime);

        this.debounceEffect();
        this.debounceLoveOver();
      },
      _debounceEffect() {
        this.$refs.chips.boom();
      },
      _debounceLoveOver() {
        this.clicking = false;
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
  .counter {
    position: absolute;
    transition: all 1s;
    user-select: none;
    font-weight: bold;
  }

  .vclapbtn-bin-wrap {
    position: relative;
    font-family: "Microsoft YaHei";
    font-size: 12px;
  }

  .vclapbtn-bin {
    cursor: pointer;
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

  @keyframes bounceInUp {
    0%,60%,75%,90%,to {
      animation-timing-function: cubic-bezier(.215,.61,.355,1)
    }
    0% {
      opacity: 0;
      transform:translate(-50%,-5px)
    }

    60% {
      opacity: 1;
      transform:translate(-50%,5px)
    }

    90% {
      transform:translate(-50%,-2px)
    }

    100% {
      transform:translate(-50%,0)
    }

    to {
      transform:translate(-50%,0)
    }
  }

  .bounceInUp {
    animation-name: bounceInUp
  }

</style>
