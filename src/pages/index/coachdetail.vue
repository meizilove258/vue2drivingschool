<template>
  <div>
    <app-header></app-header>
    <div class="title_container">
      <div class="banner flex v_center h_center">
        <img src="../../images/banner.png" alt="" class="header">
      </div>
      <div class="flex h_center height_40 line_h40 bg_f">
        <span class="font_16 color_3 bold m_r_20">张三</span>
        <span class="font_14 color_3">总教练</span>
      </div>
      <div class="bg_f p_lr_20 p_b_20">
        <div class="des p_20 font_14 color_3 line_h22 text_justify">个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介</div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'

export default {
  name: 'coachdetail',
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
  height: 2.17rem;
  background: url("../../images/memberbg.png") no-repeat 0 0;
  background-size: 100% 100%;
}
.header{
  display: block;
  width: 1.54rem;
  height: 1.54rem;
  @include border-r-50
}
.des{
  border: 1px solid #d2d2d2;
}
</style>
