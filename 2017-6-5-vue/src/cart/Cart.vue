<template>
  <div class="cart">
    <div class="space">
      <div class="cart-list">
        <section v-for="n in 10">
          <div class="in">
            <div class="fl">
              <div lazy-load="https://img.alicdn.com/imgextra/i4/880734502/TB2Zp1IqFXXXXavXpXXXXXXXXXX_!!880734502.jpg_430x430q90.jpg">
                <div></div>
              </div>
            </div>
            <div class="info-box" style="overflow: hidden">
              <div class="top ellipsis">松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询</div>
              <div class="middle">松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询</div>
              <div class="bottom">
                <div class="fr">
                  <span>数量：</span>
                  <span>
                    <input class="count-input" type="number" style="width: 80px;" value="1">
                  </span>
                </div>
                <div class="price">￥123</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  props: ['g'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    const vm = this
    vm.$nextTick(() => {
      setTimeout(() => {
        vm.g.lazyLoad()
      }, 300)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-list {}
.cart-list * {vertical-align: middle;}
.cart-list section {}
.cart-list section .in {overflow: hidden; background: #fff; border-bottom: 1px solid #ddd; padding: 15px;}
.cart-list section .in > .fl {width: 200px; margin-right: 15px;}
.cart-list section .in > .fl > div {padding-top: 100%;}
.cart-list section .in > .fl [lazy-load] {}
.cart-list section .in .info-box {}
.cart-list section .in .info-box .top {}
.cart-list section .in .info-box .middle {color: #666; margin: 15px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.cart-list section .in .info-box .bottom {}
.cart-list section .in .info-box .bottom .price {color: #c00;}
.cart-list section .in .info-box .bottom .count-input {text-align: center;}
</style>
