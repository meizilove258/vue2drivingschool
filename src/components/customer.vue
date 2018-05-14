<template>
  <div class="customer bg_halfblack flex v_center h_center">
      <img src="../images/icon_customer.png" alt="" class="icon_customer">
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.customer{
  position: fixed;
  right: 0.2rem;
  bottom: 80px;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 4px;
}
.icon_customer{
  display: block;
  width: 0.52rem;
  height: 0.46rem;
}
</style>
