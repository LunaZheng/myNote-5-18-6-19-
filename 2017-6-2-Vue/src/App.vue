<template>
  <div id="app">
    <div class="page-box">
      <transition name="bounce">
        <index
          :g="g"
          v-if="g.router.pageOut === '首页'"
        ></index>
      </transition>
        <transition name="bounce">
        <cart
          :g="g"
          v-if="g.router.pageOut === '购物车'"
        ></cart>
      </transition>
        <transition name="bounce">
        <Horn
          :g="g"
          v-if="g.router.pageOut === '大喇叭'"
        ></Horn>
      </transition>
        <transition name="bounce">
        <user
          :g="g"
          v-if="g.router.pageOut === '我的'"
        ></user>
      </transition>
    </div>
    <fixed-footer
      :g="g"
    ></fixed-footer>
  </div>
</template>

<script>
import './assets/css/all.css'
import './assets/icon/style.css'
import logo from './assets/img/logo.jpg'
import FixedFooter from './components/FixedFooter'
import Index from './index/Index'
import Cart from './cart/Cart'
import Horn from './Horn/Horn'
import User from './user/User'

export default {
  name: 'app',
  props: ['g'],
  data() {
    return {
      logo,
    }
  },
  components: {
    Index,
    Cart,
    Horn,
    User,
    FixedFooter
  },
  methods: {
    
  }
}
</script>

<style>
#app {}
#app .page-box {width: 750px; height: 100%; position: absolute; left: 50%; margin-left: -375px;}
#app .page-box > div {width: 100%; height: 100%; position: absolute; left: 0; top: 0;}
</style>
