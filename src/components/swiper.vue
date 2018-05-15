<template>
  <div class="swiper_box">
    <swiper :options="swiperOption" ref="mySwiper" v-if="!!swiperArr">
      <swiper-slide v-for="item in swiperArr" v-bind:key="item.index"><img :src="item.src" alt="" class="swiper-slide-img"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'carrousel',
  components: {
    swiper,
    swiperSlide
  },
  props: ['swiperArray'],
  data () {
    return {
      swiperOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        loop: true,
        autoplay: true,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperArr: null
    }
  },
  watch: {
    swiperArray (val, oldVal) {
      let vm = this
      if (val !== oldVal) {
        vm.swiperArr = val
      }
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .swiper_box,.swiper-slide{
    width: 100%;
    height: 3.6rem;
  }
  .swiper-slide-img{
    width: 100%;
    height: 3.6rem;
  }
</style>
