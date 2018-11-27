<template>
  <div id="app">
    <vue-clap-button class="icon" ref="clap" @cancel="cancel" @clap="clap"></vue-clap-button>
    <vue-clap-button class="icon" icon="love" :max-click="3"></vue-clap-button>
    <vue-clap-button class="icon" icon="star" :max-click="10"></vue-clap-button>
    <vue-clap-button class="icon" icon="star" :size="30"></vue-clap-button>
  </div>
</template>

<script>

  export default {
    name: 'Test',
    methods: {
      cancel() {
        console.log("canceled all clap");
      },
      clap(clapsCount) {
        console.log(`Get ${clapsCount} claps`);
        console.log(`You can also call ref.getClaps() : ${this.$refs.clap.getClaps()}`);
      }
    }
  }
</script>

<style>
  #app{
    margin:80px;
    clear: both;
  }
  .icon{
    display: inline-block;
    margin:0 15px;
  }
</style>
