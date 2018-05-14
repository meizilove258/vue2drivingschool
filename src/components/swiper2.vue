<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperArray" v-bind:key="item.index">
          <img :src="item.src" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
require('../../plugins/swiper.min')
// require('../plugins/swiper.min')

export default {
  name: 'swiper2',
  data () {
    return {
      swiperArray: null
    }
  },
  mounted () {
    let that = this
    that.getAdList()
  },
  methods: {
    swiperInit () {
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        initialSlide: 5
      })
    },
    getAdList () {
      let that = this
      setTimeout(function () {
        that.swiperArray = [
          {index: 1, src: 'http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg'},
          {index: 2, src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png'}
        ]
        that.$nextTick(function () {
          that.swiperInit()
        })
      }, 2000)
    }
  }
}
</script>

<style scoped>
@import "../../plugins/swiper.min.css";
/*@import "../plugins/swiper.min.css";*/
.swiper-container,.swiper-slide{
  width: 100%;
  height: 4.2rem;
}
.swiper-pagination-bullet{
  margin: 8px;
}
</style>
