<template>
  <div>
    <app-header></app-header>
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

</style>
