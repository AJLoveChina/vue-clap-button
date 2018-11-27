<template>
  <div class="cancel-love"  @click="$emit('cancel')" :style="{width:`${size / 2 - height}px`, height: `${height}px`, padding: `0 ${height / 2}px`,
        borderRadius: `${height}px`, left: `${size - height / 2}px`, top: `${(size - height) / 2}px`, lineHeight: `${height}px`, border: `1px solid ${colorNormal}`}">
    <icon-base :icon-color="colorNormal" :width="12" :height="height">
      <icon-close />
    </icon-base>
  </div>
</template>

<script>
  import IconBase from './IconBase'
  import IconClose from './icons/IconClose'
  export default {
    name: "cancel-love",
    props: ['size', 'colorNormal', 'colorActive'],
    computed: {
      height() {
        return this.size / 3;
      }
    },
    components: {
      IconBase,
      IconClose
    },
  }
</script>

<style scoped>
  .cancel-love{
    position: absolute;
    text-align: right;
    font-size:12px;
    cursor:pointer;
  }
</style>
