<template>
  <div>
    <app-header></app-header>
    <div class="title_container">
      <div class="banner flex v_center h_center">
        <div>
          <img src="../../images/banner.png" alt="" class="logo m_b_20">
          <div class="font_16 color_3 bold">福建安裕丰汽车驾训有限公司连江分公司</div>
        </div>
      </div>
      <div class="flex v_center p_l_20 height_40 line_h40"><span class="icon_title bg_theme m_r_10"></span><span class="font_14 color_3">驾校简介</span></div>
      <div class="bg_f p_20 font_14 color_3 line_h22 text_justify">驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介驾校简介</div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'

export default {
  name: 'info',
  components: {
    appHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.banner{
  height: 2.5rem;
  background: url('../../images/shopinfo_img.png') no-repeat 0 0;
  background-size: 100% 100%;
}
.logo{
  display: block;
  width: 1.36rem;
  height: 1.36rem;
  @include border-r-50;
  margin-left: auto;
  margin-right: auto;
}
.icon_title{
  width: 4px;
  height: 16px;
}
</style>
