<template>
  <div>
    <app-header></app-header>
    <div class="title_container">
      <ul class="list bg_f m_t_20">
        <li class="item p_20 border_b_e6">
          <router-link :to="{name: 'messagedetail'}" >
            <div class="flex v_center m_b_20">
              <div class="icon_rad m_r_20"></div>
              <div class="font_14 color_3">团购活动开始了，3人成团，立减200元！</div>
            </div>
            <div class="font_12 color_9 text_right">2018-04-02 12:34:33</div>
          </router-link>
        </li>
        <li class="item p_20 border_b_e6">
          <router-link :to="{name: 'messagedetail'}" >
            <div class="flex v_center m_b_20">
              <div class="icon_rad m_r_20"></div>
              <div class="font_14 color_3">团购活动开始了，3人成团，立减200元！</div>
            </div>
            <div class="font_12 color_9 text_right">2018-04-02 12:34:33</div>
          </router-link>
        </li>
        <li class="item p_20 border_b_e6">
          <router-link :to="{name: 'messagedetail'}" >
            <div class="flex v_center m_b_20">
              <div class="icon_rad m_r_20"></div>
              <div class="font_14 color_3">团购活动开始了，3人成团，立减200元！</div>
            </div>
            <div class="font_12 color_9 text_right">2018-04-02 12:34:33</div>
          </router-link>
        </li>
        <li class="item p_20 border_b_e6">
          <router-link :to="{name: 'messagedetail'}" >
            <div class="flex v_center m_b_20">
              <div class="icon_rad m_r_20"></div>
              <div class="font_14 color_3">团购活动开始了，3人成团，立减200元！</div>
            </div>
            <div class="font_12 color_9 text_right">2018-04-02 12:34:33</div>
          </router-link>
        </li>
        <li class="item p_20 border_b_e6">
          <router-link :to="{name: 'messagedetail'}" >
            <div class="flex v_center m_b_20">
              <div class="icon_rad m_r_20"></div>
              <div class="font_14 color_3">团购活动开始了，3人成团，立减200元！</div>
            </div>
            <div class="font_12 color_9 text_right">2018-04-02 12:34:33</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'

export default {
  name: 'message',
  components: {
    appHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.icon_rad{
  width: 0.12rem;
  height: 0.12rem;
  @include border-r-50;
  background-color: $theme;
}

</style>
