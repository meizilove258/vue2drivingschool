<template>
  <div>
    <app-header></app-header>
    <div class="title_container">
      <div class="banner">
        <img src="../../images/service_img.png" alt="" class="service_img">
      </div>
      <div class="bg_f">
        <div class="font_16 color_3 p_lr_20 height_40 line_h40">福建安裕丰驾校服务承诺：</div>
        <ul class="list p_20">
          <li class="item m_b_20">
            <div class="font_14 color_3 bold">1.一费到底</div>
            <div class="font_14 color_6 line_h22 text_indent_8">收费透明，杜绝二次收费</div>
          </li>
          <li class="item m_b_20">
            <div class="font_14 color_3 bold">1.专属客服</div>
            <div class="font_14 color_6 line_h22 text_indent_8">不车总监全程陪同，保姆式服务</div>
          </li>
          <li class="item m_b_20">
            <div class="font_14 color_3 bold">1.教学规范</div>
            <div class="font_14 color_6 line_h22 text_indent_8">标准化教学体系，教学交果好</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'

export default {
  name: 'service',
  components: {
    appHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.service_img{
  display: block;
  width: 100%;
  height: 3.6rem;
}
</style>
