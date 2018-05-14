<template>
  <div>
    <app-header></app-header>
    <div class="title_container">
      <ul class="list bg_f">
        <li class="item border_t_e6 p_20">
          <router-link :to="{name: 'activedetail'}">
            <img src="../../images/banner.png" alt="" class="item_img m_b_20">
            <div class="font_14 color_3 bold m_b_20">c1手动档普通班</div>
            <div class="flex s_between">
              <div class="flex_1 flex">
                <div class="font_12 color_6 m_r_20">参团价<span class="font_14 color_theme bold">￥2999</span></div>
                <div class="font_12 color_6">原价<span class="font_14 color_6">￥3299</span></div>
              </div>
              <div class="font_12 color_6">剩余3天</div>
            </div>
          </router-link>
        </li>
        <li class="item border_t_e6 p_20">
          <router-link :to="{name: 'activedetail'}">
            <img src="../../images/banner.png" alt="" class="item_img m_b_20">
            <div class="font_14 color_3 bold m_b_20">c1手动档普通班</div>
            <div class="flex s_between">
              <div class="flex_1 flex">
                <div class="font_12 color_6 m_r_20">参团价<span class="font_14 color_theme bold">￥2999</span></div>
                <div class="font_12 color_6">原价<span class="font_14 color_6">￥3299</span></div>
              </div>
              <div class="font_12 color_6">剩余3天</div>
            </div>
          </router-link>
        </li>
        <li class="item border_t_e6 p_20">
          <router-link :to="{name: 'activedetail'}">
            <img src="../../images/banner.png" alt="" class="item_img m_b_20">
            <div class="font_14 color_3 bold m_b_20">c1手动档普通班</div>
            <div class="flex s_between">
              <div class="flex_1 flex">
                <div class="font_12 color_6 m_r_20">参团价<span class="font_14 color_theme bold">￥2999</span></div>
                <div class="font_12 color_6">原价<span class="font_14 color_6">￥3299</span></div>
              </div>
              <div class="font_12 color_6">剩余3天</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'

export default {
  name: 'active',
  components: {
    appHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.item_img{
  display: block;
  width: 100%;
  height: 2.4rem;
}
</style>
