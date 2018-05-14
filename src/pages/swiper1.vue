<template>
  <div>
    <swiper :swiper=""></swiper>
  </div>
</template>

<script>
import swiper from '../components/swiper'

export default {
  components: {
    swiperArray: null
  },
  data () {
    return {}
  },
  methods: {
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

</style>
