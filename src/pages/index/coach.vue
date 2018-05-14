<template>
  <div>
    <app-header></app-header>
    <div class="title_container">
      <div class="list p_20 clearfix">
        <router-link :to="{name: 'coachdetail'}" class="item float_left">
          <img src="../../images/banner.png" alt="" class="item_img m_b_20">
          <div class="font_14 color_3 text_center m_b_20">张三</div>
          <div class="btn font_14 color_f bg_theme text_center">总教练</div>
        </router-link>
        <router-link :to="{name: 'coachdetail'}" class="item float_left">
          <img src="../../images/banner.png" alt="" class="item_img m_b_20">
          <div class="font_14 color_3 text_center m_b_20">张三</div>
          <div class="btn font_14 color_f bg_theme text_center">科二教练</div>
        </router-link>
        <router-link :to="{name: 'coachdetail'}" class="item float_left">
          <img src="../../images/banner.png" alt="" class="item_img m_b_20">
          <div class="font_14 color_3 text_center m_b_20">张三</div>
          <div class="btn font_14 color_f bg_theme text_center">总教练</div>
        </router-link>
        <router-link :to="{name: 'coachdetail'}" class="item float_left">
          <img src="../../images/banner.png" alt="" class="item_img m_b_20">
          <div class="font_14 color_3 text_center m_b_20">张三</div>
          <div class="btn font_14 color_f bg_theme text_center">科二教练</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'

export default {
  name: 'coach',
  components: {
    appHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.item{
  width: 50%;
  padding: 0.15rem;
  box-sizing: border-box;
  @include border-r-4;
}
.item_img{
  display: block;
  width: 100%;
  height: 2.44rem;
  @include border-r-4;
}
.btn{
  width: 1.5rem;
  height: 0.44rem;
  line-height: 0.44rem;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
}
</style>
