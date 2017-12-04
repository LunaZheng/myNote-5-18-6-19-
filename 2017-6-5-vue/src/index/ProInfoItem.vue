<template>
  <div class="content ke-post pro-info" style="height: auto;">
    <img src="https://img.alicdn.com/imgextra/i2/880734502/TB2egw0rVXXXXawXpXXXXXXXXXX-880734502.jpg" class="img-ks-lazyload">
    <br>
    <img src="https://img.alicdn.com/imgextra/i4/880734502/TB2iygQrVXXXXbJXpXXXXXXXXXX-880734502.jpg" class="img-ks-lazyload">
    <br>
    <img src="https://img.alicdn.com/imgextra/i3/880734502/TB2C_NlsXXXXXazXXXXXXXXXXXX-880734502.jpg" class="img-ks-lazyload">
    <br>
    <img src="https://img.alicdn.com/imgextra/i3/880734502/TB2rTVpsXXXXXXMXXXXXXXXXXXX-880734502.jpg" class="img-ks-lazyload">
    <br>
    <img src="https://img.alicdn.com/imgextra/i4/880734502/TB2QhEFrVXXXXbAXpXXXXXXXXXX-880734502.jpg" class="img-ks-lazyload">
    <br>
    <img src="https://img.alicdn.com/imgextra/i1/880734502/TB2UIsHrVXXXXcoXpXXXXXXXXXX-880734502.jpg" class="img-ks-lazyload">
    <br>
    <img src="https://img.alicdn.com/imgextra/i4/880734502/TB2uE33rVXXXXX3XpXXXXXXXXXX-880734502.jpg" class="img-ks-lazyload">
    <br>
    <img src="//img-tmdetail.alicdn.com/tps/i3/T1BYd_XwFcXXb9RTPq-90-90.png" data-ks-lazyload="https://img.alicdn.com/imgextra/i2/880734502/TB23uv2l80kpuFjSsziXXa.oVXa-880734502.jpg"></div>
</template>

<script>
import Carousel from '../components/Carousel'

export default {
  name: 'pro-info-item',
  props: ['g'],
  components: {
    Carousel
  },
  data() {
    return {
      imgList: []
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style scoped>
.pro-info {}
.pro-info img {max-width: 100%;}
</style>
