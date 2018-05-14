<template>
  <div>
    <app-header></app-header>
    <div class="title_container">
      <div class="bg_f m_b_20"></div>
      <div class="bg_f p_20 m_b_20">
        <div class="font_16 color_3 m_b_20">联系人信息</div>
        <div>
          <div class="row flex m_b_20 v_center">
            <div class="key font_14 color_3">姓名</div>
            <input type="text" class="value flex_1">
          </div>
          <div class="row flex m_b_20 v_center">
            <div class="key font_14 color_3">联系电话</div>
            <input type="text" class="value flex_1">
          </div>
          <div class="row flex m_b_20 v_center">
            <div class="key font_14 color_3">姓名</div>
            <textarea type="text" class="value_text flex_1"></textarea>
          </div>
        </div>
      </div>
      <div class="bg_f m_b_20">
        <div class="font_16 color_3 p_lr_20 p_t_20">商品信息</div>
        <div class="flex v_center p_20 border_b_e6">
          <img src="../../images/banner.png" alt="" class="goods_img m_r_20">
          <div class="flex_1">
            <div class="font_14 color_3 m_b_20">c1手动档普通班</div>
            <div class="font_14 color_3">
              <span class="font_12 color_6">参团价</span>
              <span class="font_15 color_theme">￥2999</span>
              <span class="font_12 color_6">原价￥3999</span>
            </div>
          </div>
        </div>
        <div class="flex f_end p_20">
          <div>
            <div class="font_14 color_3 m_b_20">商品总数：1件</div>
            <div class="font_14 color_3">合计金额：<span class="font_15 color_theme">￥2999</span></div>
          </div>
        </div>
      </div>
      <button class="btn_sub font_15 color_f bg_theme">提交订单</button>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'

export default {
  name: 'suborder-curr',
  components: {
    appHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.goods_img{
  width: 1.8rem;
  height: 1.4rem;
}
.key{
  width: 70px;
}
.value{
  height: 30px;
}
.value_text{
  height: 60px;
}
.value,.value_text{
  border: none;
  outline: none;
}

.btn_sub{
  display: block;
  width: 5.1rem;
  height: 0.8rem;
  margin-left: auto;
  margin-right: auto;
  @include border-r-4;
}
</style>
