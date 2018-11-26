<template>
  <div ref="circle" @click="click" class="vclapbtn-bin animated">
    <div ref="btn" class="animated">
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
    data() {
      return {
        iconColorActive: "#FF4500",
        iconColorNormal: "#ccc",
        iconColor: "#ccc"
      }
    },
    components: {
      IconLove,
      IconBase,
    },
    methods: {
      click() {
        let el = this.$refs.circle;
        let btn = this.$refs.btn;
        util.addClass(el, 'pulse');
        util.addClass(btn, 'tada');
        this.iconColor = this.iconColorActive;

        setTimeout(() => {
          util.removeClass(el, 'pulse');
          util.removeClass(btn, 'tada');
          this.iconColor = this.iconColorNormal;
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  .vclapbtn-bin {
    width: 50px;
    height: 50px;
    cursor:pointer;
    line-height: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
  }
  .vclapbtn-bin:hover {
    border-color:orangered;
    transition:all 1s;
    -webkit-box-shadow: orangered 0 0 10px;
    -moz-box-shadow: orangered 0 0 10px;
    box-shadow: orangered 0 0 10px;
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

    10%,20% {
      transform: scale3d(.8,.8,.8) rotate(-3deg)
    }

    30%,50%,70%,90% {
      transform: scale3d(1.2,1.2,1.2) rotate(3deg)
    }

    40%,60%,80% {
      transform: scale3d(1.2,1.2,1.2) rotate(-3deg)
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


  .btn.active {
    color:orangered;
  }
</style>
