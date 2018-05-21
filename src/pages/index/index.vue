<template>
  <div>
    <app-header></app-header>
    <div class="title_container tabbar_container">
      <swiper :swiperArray="swiperArray1"></swiper>
      <swiper :swiperArray="swiperArray2"></swiper>
      <div class="bg_f m_b_20 p_lr_20">
        <div class="flex p_tb_20 border_b_e6">
          <router-link :to="{name: 'info'}" class="flex_1">
            <img src="../../images/nav_01.png" alt="" class="icon_nav_img1 m_b_20">
            <div class="font_14 color_3 text_center">驾校简介</div>
          </router-link>
          <router-link :to="{name: 'coach'}" class="flex_1">
            <img src="../../images/nav_02.png" alt="" class="icon_nav_img1 m_b_20">
            <div class="font_14 color_3 text_center">驾校教练</div>
          </router-link>
          <router-link :to="{name: 'service'}" class="flex_1">
            <img src="../../images/nav_03.png" alt="" class="icon_nav_img1 m_b_20">
            <div class="font_14 color_3 text_center">服务承诺</div>
          </router-link>
          <router-link :to="{name: 'message'}" class="flex_1">
            <img src="../../images/nav_04.png" alt="" class="icon_nav_img1 m_b_20">
            <div class="font_14 color_3 text_center">最新通知</div>
          </router-link>
        </div>
        <div class="flex p_tb_20">
          <div class="flex_1 flex v_center">
            <img src="../../images/nav_05.png" alt="" class="icon_nav_img2">
            <div class="flex_1">
              <div class="font_14 color_3 m_b_20">地图导航</div>
              <div class="font_12 color_9">熟知路线 轻松来校</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="flex_1 flex v_center">
            <img src="../../images/nav_06.png" alt="" class="icon_nav_img2">
            <div class="flex_1">
              <div class="font_14 color_3 m_b_20">联系我们</div>
              <div class="font_12 color_9">一键拨号 轻松沟通</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m_lr_20 m_b_20 p_20 bg_f">
        <div class="font_16 color_3 text_center height_40 line_h40"><img src="../../images/icon_tips.png" alt="" class="icon_tips m_r_10">最新活动</div>
        <div>
          <img src="../../images/activity_img.png" alt="" class="activity_img m_b_20">
          <div class="font_14 color_3 height_30 line_h30">团购学车，3人成团，每人立减300元</div>
        </div>
        <router-link :to="{name: 'active'}" tag="div" class="font_14 color_theme text_center height_30 line_h30">查看更多 <img src="../../images/icon_arr_dowm.png" alt="" class="icon_arr_dowm"></router-link>
      </div>
      <div class="bg_f m_b_20">
        <div class="font_16 color_3 text_center height_40 line_h40"><img src="../../images/icon_tt_01.png" alt="" class="icon_tips m_r_10">考试宝典</div>
        <ul class="list p_l_20">
          <li class="item flex p_tb_20 p_r_20 border_b_e6">
            <img src="../../images/banner.png" alt="" class="item_img m_r_20">
            <div class="flex_1">
              <div class="item_title font_14 color_3 m_b_10">学车大概花费多少？</div>
              <div class="item_des font_14 color_6">大家学车一定要选取正轨管理的驾校，这样才能防止黑心教练的各种坑和...</div>
            </div>
          </li>
          <li class="item flex p_tb_20 p_r_20 border_b_e6">
            <img src="../../images/banner.png" alt="" class="item_img m_r_20">
            <div class="flex_1">
              <div class="item_title font_14 color_3 m_b_10">学车大概花费多少？</div>
              <div class="item_des font_14 color_6">大家学车一定要选取正轨管理的驾校，这样才能防止黑心教练的各种坑和...</div>
            </div>
          </li>
          <li class="item flex p_tb_20 p_r_20 border_b_e6">
            <img src="../../images/banner.png" alt="" class="item_img m_r_20">
            <div class="flex_1">
              <div class="item_title font_14 color_3 m_b_10">学车大概花费多少？</div>
              <div class="item_des font_14 color_6">大家学车一定要选取正轨管理的驾校，这样才能防止黑心教练的各种坑和...</div>
            </div>
          </li>
          <li class="item flex p_tb_20 p_r_20 border_b_e6">
            <img src="../../images/banner.png" alt="" class="item_img m_r_20">
            <div class="flex_1">
              <div class="item_title font_14 color_3 m_b_10">学车大概花费多少？</div>
              <div class="item_des font_14 color_6">大家学车一定要选取正轨管理的驾校，这样才能防止黑心教练的各种坑和...</div>
            </div>
          </li>
          <li class="item flex p_tb_20 p_r_20 border_b_e6">
            <img src="../../images/banner.png" alt="" class="item_img m_r_20">
            <div class="flex_1">
              <div class="item_title font_14 color_3 m_b_10">学车大概花费多少？</div>
              <div class="item_des font_14 color_6">大家学车一定要选取正轨管理的驾校，这样才能防止黑心教练的各种坑和...</div>
            </div>
          </li>
        </ul>
        <div>
          <div class="font_14 color_theme text_center height_30 line_h30">查看更多 <img src="../../images/icon_arr_dowm.png" alt="" class="icon_arr_dowm"></div>
        </div>
      </div>
    </div>
    <tab-bar></tab-bar>
    <customer></customer>
  </div>
</template>

<script>
import tabBar from '../../components/tabbar'
import customer from '../../components/customer'
import swiper from '../../components/swiper'
import appHeader from '../../components/appheader'
import api from '../../api/index'

export default {
  components: {
    tabBar,
    customer,
    swiper,
    appHeader
  },
  data () {
    return {
      swiperArray1: null,
      swiperArray2: null
    }
  },
  mounted () {
    let vm = this
    vm.getAdList()
  },
  methods: {
    getAdList () {
      let that = this
      api.getData().then((res) => {
        that.swiperArray1 = res.data
      })
      api.getData2().then((res) => {
        that.swiperArray2 = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss" type="text/css">
.icon_nav_img1{
  display: block;
  width: 0.9rem;
  height: 0.9rem;
  margin-left: auto;
  margin-right: auto;
}
.icon_nav_img2{
  display: block;
  width: 0.77rem;
  height: 0.77rem;
  margin-right: 0.1rem;
}
.divider{
  width: 1px;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  background-color: #e6e6e6;
}
.activity_img{
  display: block;
  width: 100%;
  height: 1.3rem;
}
.icon_tips{
  width: 0.33rem;
  height: 0.28rem;
  vertical-align: middle;
}
.icon_arr_dowm{
  width: 0.2rem;
  height: 0.2rem;
  vertical-align: middle;
}
.item:last-child{
  border-bottom: none;
}
.item_img{
  width: 1.8rem;
  height: 1.14rem;
}
</style>
