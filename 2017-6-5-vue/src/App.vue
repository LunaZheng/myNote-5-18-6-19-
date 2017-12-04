<template>
  <div id="app">
    <transition name="bounce">
      <div class="page-out-box"
        v-if="!g.router.pageIn"
      >
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
    </transition>

    <transition name="bounce">
      <div class="page-in-box"
        v-if="g.router.pageIn"
      >
        <transition name="bounce"><!-- 商品详情页 -->
          <pro-info 
            v-if="g.router.pageIn == 'showProDetail'"
            :g="g"
          ></pro-info>
        </transition>
        <transition name="bounce"><!-- 订单页面 -->
          <order-page 
            v-if="g.router.pageIn == 'orderPage'"
            :g="g"
          ></order-page>
        </transition>
      </div>
    </transition>

    <transition name="bounce">
      <fixed-footer
        :g="g"
        v-if="!g.router.isHideFooter"
      ></fixed-footer>
    </transition>
  </div>
</template>

<script>
import FixedFooter from './components/FixedFooter'
import Index from './index/Index'
import Cart from './cart/Cart'
import Horn from './Horn/Horn'
import User from './user/User'

import ProInfo from './index/ProInfo'
import OrderPage from './user/OrderPage'

export default {
  name: 'app',
  props: ['g'],
  data() {
    return {
    }
  },
  components: {
    Index,
    Cart,
    Horn,
    User,
    FixedFooter,
    ProInfo,
    OrderPage
  },
  methods: {
    
  }
}
</script>

<style>
#app {}
#app .page-out-box,
#app .page-in-box {width: 750px; height: 100%; position: absolute; left: 50%; margin-left: -375px;}
#app .page-out-box > div,
#app .page-in-box > div {width: 100%; position: absolute; left: 0; top: 0; padding-bottom: 120px;}
</style>
