<template>
  <div class="order-page">
    <div class="fixed-top">
      <div class="wrap shadow">
        <order :loadOrderList="loadOrderList" :g="g"></order>
      </div>
    </div>
    <div style="padding-top: 108px;">
      <div class="space">
        <div style="font-size: 36px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">{{orderList[g.router.orderIndex].name}}</div>
        <div>
          <div class="cart-list shop-list"
            v-for="(shop, idx) in shops"
          >
            <div class="shop-name">
              <span class="icon-service-tianmao"></span>
              <span>{{shop.shopName}}</span>
            </div>
            <div class="shadow">
              <div class="list">
                <section
                  v-for="(item, idx) in shop.list"
                >
                  <div class="in">
                    <div class="fl">
                      <div lazy-load="https://img.alicdn.com/imgextra/i4/880734502/TB2Zp1IqFXXXXavXpXXXXXXXXXX_!!880734502.jpg_430x430q90.jpg">
                        <div></div>
                      </div>
                    </div>
                    <div class="info-box" style="overflow: hidden">
                      <div class="top ellipsis">{{item.title}}</div>
                      <div class="middle">{{item.info}}</div>
                      <div class="bottom">
                        <div class="fr">
                          <template v-if="g.router.pageIn == 0">
                            <div class="ib">
                              <span>数量：</span>
                              <div class="ib">
                                <input class="count-input form-control" type="number" style="width: 80px;" v-model="item.num">
                              </div>
                            </div>
                            <div class="ib">
                              <button class="btn btn-success">结算</button>
                            </div>
                          </template>
                          <template v-else>
                            <div style="padding-top: 10px;">数量：{{item.num}}</div>
                          </template>
                        </div>
                        <div class="price">￥{{item.price}}</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="space" style="padding-top: 0;">
                <span>当前店铺总计：<i style="color: #a00;">￥{{sumOneShop(idx)}}</i></span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="space">
            <a href="javascript:" style="display: block;" class="btn btn-danger btn-block">共计：￥{{totalPay}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Order from './Order'

export default {
  name: 'orderPage',
  components: {
    Order
  },
  props: ['g'],
  data () {
    return {
      orderList: [{
        name: '待付款',
        icon: 'icon-paypal',
      }, {
        name: '待发货',
        icon: 'icon-flag',
      }, {
        name: '待收货',
        icon: 'icon-truck',
      }, {
        name: '待评价',
        icon: 'icon-joomla',
      }, {
        name: '退款/售后',
        icon: 'icon-trophy',
      }],
      shops: [{
        shopName: '王子小零食1',
        list: [{
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 5,
          num: 3
        }, {
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 10,
          num: 3
        }, {
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 10,
          num: 3
        }]
      },{
        shopName: '王子小零食2',
        list: [{
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 10,
          num: 3
        }, {
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 10,
          num: 3
        }, {
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 10,
          num: 3
        }]
      },{
        shopName: '王子小零食3',
        list: [{
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 10,
          num: 3
        }, {
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 10,
          num: 3
        }, {
          title: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          info: '松鼠零食店加盟,就选悠百佳,专注食品加盟行业,全年广告宣传,有实力就是这么任性,一站式服务,免费退换货,轻松经营,点击咨询',
          price: 10,
          num: 3
        }]
      },]
    }
  },
  computed: {
    totalPay() {
      const vm = this
      let total = 0
      vm.shops.forEach((shop) => {
        shop.list.forEach((item, idx) => {
          total += item.num * item.price
        })
      })
      return total
    }
  },
  methods: {
    loadOrderList(idx) {
      var vm = this
      var item = vm.orderList[idx]
      console.log('加载订单数据：' + item.name)
    },
    sumOneShop(idx) {
      const vm = this
      const shop = vm.shops[idx]
      let total = 0
      shop.list.forEach((item, idx) => {
        total += item.price * item.num
      })
      return total
    }
  },
  mounted() {
    var vm = this
    vm.$nextTick(() => {
      setTimeout(function() {
        console.log('d')
        vm.g.lazyLoad()
      }, 200)
    })
  }
}
</script>

<style scoped>
.fixed-top {width: 100%; position: fixed; left: 0; top: 0; z-index: 20;}

.cart-list {}
.cart-list .shop-name {padding: 40px 0 20px 0;}
.cart-list * {vertical-align: middle;}
.cart-list section {}
.cart-list section .in {overflow: hidden; background: #fff; border-bottom: 1px solid #ddd; padding: 15px;}
.cart-list section:last-child .in {border: none;}
.cart-list section .in > .fl {width: 200px; margin-right: 15px;}
.cart-list section .in > .fl > div {padding-top: 100%;}
.cart-list section .in > .fl [lazy-load] {}
.cart-list section .in .info-box {}
.cart-list section .in .info-box .top {}
.cart-list section .in .info-box .middle {color: #666; margin: 15px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.cart-list section .in .info-box .bottom {}
.cart-list section .in .info-box .bottom .price {color: #c00; padding-top: 10px}
.cart-list section .in .info-box .bottom .count-input {text-align: center; padding-left: 0; padding-right: 0; display: inline-block; width: 80px}
</style>
