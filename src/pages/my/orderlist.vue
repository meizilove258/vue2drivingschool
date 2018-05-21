<template>
  <div>
    <app-header></app-header>
    <div class="title_container">
      <div class="flex">
        <div class="flex_1">待付款</div>
        <div class="flex_1">已付款</div>
      </div>
      <ul class="list">
        <li class="item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/appheader'

export default {
  components: {
    appHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
