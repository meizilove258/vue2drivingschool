<template>
  <div class="title flex v_center bg_f p_lr_20">
    <div class="back" @click="back" v-bind:class="{show: $route.name !== 'index' || $route.name !== 'signup' || $route.name !== 'shop' || $route.name !== 'my', hide: $route.name === 'index' || $route.name === 'signup' || $route.name === 'shop' || $route.name === 'my'}"></div>
    <div class="flex_1 font_14 color_0 text_center">驾校</div>
  </div>
</template>

<script>
export default {
  name: 'appheader',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.title{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 0.8rem;
  line-height: 0.8rem;
}
.back{
  width: 10px;
  height: 10px;
  border-top: 2px solid #333333;
  border-left: 2px solid #333333;
  transform: rotate(-45deg);
}
</style>
