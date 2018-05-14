<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.swiper-pagination-bullet.swiper-pagination-bullet-active{
  background-color: $theme;
}
</style>
