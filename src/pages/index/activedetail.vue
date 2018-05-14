<template>
  <div>
    <app-header></app-header>
    <div class="title_container btn_container">
      <swiper></swiper>
      <div class="bg_f p_20 m_b_20">
        <div class="font_14 color_3 bold m_b_20">c1手动档普通班</div>
        <div class="flex s_between">
          <div class="flex_1 flex">
            <div class="font_12 color_6 m_r_20">参团价<span class="font_14 color_theme bold">￥2999</span></div>
            <div class="font_12 color_6">原价<span class="font_14 color_6">￥3299</span></div>
          </div>
          <div class="font_12 color_6">剩余3天</div>
        </div>
      </div>
      <div class="bg_f p_lr_20 m_b_20">
        <div class="p_tb_20 font_15 color_3">
          我开的团
          <span class="font_15 color_6">（还差<span class="font_15 color_theme">1</span>人）</span>
          <span class="font_15 color_6 hide">（已成团）</span>
          <span class="font_15 color_6 hide">（拼团失败）</span>
        </div>
        <ul class="headerlist clearfix p_b_20">
          <li class="headeritem float_left">
            <img src="../../images/banner.png" alt="" class="header_img">
          </li>
          <li class="headeritem float_left">
            <img src="../../images/banner.png" alt="" class="header_img">
          </li>
          <li class="headeritem float_left">
            <img src="../../images/header.png" alt="" class="header_img">
          </li>
        </ul>
        <div class="flex v_center border_t_e6 p_tb_20">
          <div class="flex_1 font_14 color_3">拼团失败，请联系驾校进行退款！</div>
          <img src="../../images/tel.png" alt="" class="icon_tel">
        </div>
      </div>
      <div class="bg_f m_b_20">
        <div class="p_20 font_15 color_3">当前拼团</div>
        <ul class="list">
          <li class="item flex v_center border_b_e6 p_20">
            <img src="../../images/banner.png" alt="" class="item_img m_r_20">
            <div class="flex_1 flex v_center">
              <div class="flex_1 font_14 color_3">微信昵称</div>
              <div class="flex_1 font_14 color_3">还差<span class="color_theme">n</span>人</div>
              <button class="item_btn font_14 color_f bg_theme">参团</button>
            </div>
          </li>
          <li class="item flex v_center border_b_e6 p_20">
            <img src="../../images/banner.png" alt="" class="item_img m_r_20">
            <div class="flex_1 flex v_center">
              <div class="flex_1 font_14 color_3">微信昵称</div>
              <div class="flex_1 font_14 color_3">还差<span class="color_theme">n</span>人</div>
              <button class="item_btn font_14 color_f bg_theme">参团</button>
            </div>
          </li>
          <li class="item flex v_center border_b_e6 p_20">
            <img src="../../images/banner.png" alt="" class="item_img m_r_20">
            <div class="flex_1 flex v_center">
              <div class="flex_1 font_14 color_3">微信昵称</div>
              <div class="flex_1 font_14 color_3">还差<span class="color_theme">n</span>人</div>
              <button class="item_btn font_14 color_f bg_theme">参团</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="bg_f p_20 m_b_20">
        <div class="font_15 p_tb_20 color_3">活动详情</div>
        <div class="font_14 color_6 line_h22 m_b_20">说明：现场报名时请携带免冠1寸白底彩照5张、身份证原件及复印件两份、体检申请表一份及发票、外地户籍需提供居住证</div>
        <img src="../../images/banner.png" alt="" class="des_img m_b_20">
      </div>
    </div>
    <div class="btn_box flex">
      <button class="btn flex_1 font_15 color_f bg_ltheme">原价购买</button>
      <button class="btn flex_1 font_15 color_f bg_theme" @click="openSubordercurr">我要开团</button>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'
import swiper from '../../components/swiper'

export default {
  name: 'activedetail',
  components: {
    appHeader,
    swiper
  },
  data () {
    return {}
  },
  methods: {
    openSubordercurr () {
      let that = this
      that.$router.push({
        name: 'subordercurr'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.item_img{
   width: 0.86rem;
   height: 0.86rem;
   @include border-r-50;
 }
.item_btn{
  width: 1.1rem;
  height: 0.44rem;
  @include border-r-4;
}
.des_img{
 display: block;
 width: 100%;
 height: 3.6rem;
}
.btn_box{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
}
.btn_mask,.btn{
  height: 0.84rem;
}
.headeritem{
  width: 20%;
}
.header_img{
  display: block;
  width: 0.86rem;
  height: 0.86rem;
  @include border-r-50;
  margin: 0.1rem auto;
}
.icon_tel{
  width: 0.5rem;
  height: 0.5rem;
}
</style>
