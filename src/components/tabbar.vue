<template>
  <div class="tabbars bg_f flex">
    <router-link :to="{name: 'index'}" class="tabbar flex_1">
      <img src="../images/tabbar01.png" alt="" class="icon_tabbar" v-bind:class="{show: tabbarname !== 'index', hide: tabbarname === 'index'}">
      <img src="../images/tabbar01_on.png" alt="" class="icon_tabbar" v-bind:class="{show: tabbarname === 'index', hide: tabbarname !== 'index'}">
      <div class="font_12 color_3 text_center" v-bind:class="tabbarname === 'index' ? 'color_theme': ''">首页</div>
    </router-link>
    <router-link :to="{name: 'signup'}" class="tabbar flex_1">
      <img src="../images/tabbar02.png" alt="" class="icon_tabbar" v-bind:class="{show: tabbarname !== 'signup', hide: tabbarname === 'signup'}">
      <img src="../images/tabbar02_on.png" alt="" class="icon_tabbar" v-bind:class="{show: tabbarname === 'signup', hide: tabbarname !== 'signup'}">
      <div class="font_12 color_3 text_center" v-bind:class="tabbarname === 'signup' ? 'color_theme': ''">在线报名</div>
    </router-link>
    <router-link :to="{name: 'shop'}" class="tabbar flex_1">
      <img src="../images/tabbar03.png" alt="" class="icon_tabbar" v-bind:class="{show: tabbarname !== 'shop', hide: tabbarname === 'shop'}">
      <img src="../images/tabbar03_on.png" alt="" class="icon_tabbar" v-bind:class="{show: tabbarname === 'shop', hide: tabbarname !== 'shop'}">
      <div class="font_12 color_3 text_center" v-bind:class="tabbarname === 'shop' ? 'color_theme': ''">商城</div>
    </router-link>
    <router-link :to="{name: 'my'}" class="tabbar flex_1">
      <img src="../images/tabbar04.png" alt="" class="icon_tabbar" v-bind:class="{show: tabbarname !== 'my', hide: tabbarname === 'my'}">
      <img src="../images/tabbar04_on.png" alt="" class="icon_tabbar" v-bind:class="{show: tabbarname === 'my', hide: tabbarname !== 'my'}">
      <div class="font_12 color_3 text_center" v-bind:class="tabbarname === 'my' ? 'color_theme': ''">我的</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabbarname: ''
    }
  },
  mounted () {
    let that = this
    that.tabbarname = that.$route.name
  }
}
</script>

<style scoped lang="scss">
.tabbars{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
}
.tabbar{
  padding-top: 5px;
  padding-bottom: 5px;
}
.icon_tabbar{
  display: block;
  width: 22px;
  height: 22px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6px;
}
</style>
