<template>
  <div>
    <app-header></app-header>
    <div class="title_container tabbar_container">
      <div class="header_box flex v_center h_center m_b_20">
        <div>
          <img src="../../images/banner.png" alt="" class="header m_b_20">
          <div class="font_16 color_f text_center">简约</div>
        </div>
      </div>
      <div class="flex bg_f">
        <router-link :to="{name: 'mybook'}" class="flex_1 my_mod1 p_tb_30">
          <img src="../../images/icon_my_01.png" alt="" class="icon_my m_b_10">
          <div class="font_14 color_3 text_center">我已报名</div>
        </router-link>
        <router-link :to="{name: 'myorder'}" class="flex_1 my_mod2 p_tb_30">
          <img src="../../images/icon_my_02.png" alt="" class="icon_my m_b_10">
          <div class="font_14 color_3 text_center">我的订单</div>
        </router-link>
        <router-link :to="{name: 'mygroup'}" class="flex_1 my_mod3 p_tb_30">
          <img src="../../images/icon_my_03.png" alt="" class="icon_my m_b_10">
          <div class="font_14 color_3 text_center">我的拼团</div>
        </router-link>
      </div>
    </div>
    <tab-bar></tab-bar>
    <customer></customer>
  </div>
</template>

<script>
import tabBar from '../../components/tabbar'
import customer from '../../components/customer'
import appHeader from '../../components/appheader'

export default {
  components: {
    tabBar,
    customer,
    appHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.header_box{
  width: 100%;
  height: 2.74rem;
  background: url("../../images/mybg.png") no-repeat 0 0;
  background-size: 100% 100%;
}
.header{
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  @include border-r-50;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid #f8b392;
}
.icon_my{
  display: block;
  width: 0.72rem;
  height: 0.72rem;
  margin-left: auto;
  margin-right: auto;
}
.my_mod2{
  border-left: 1px solid $e6;
  border-right: 1px solid $e6;
}
</style>
