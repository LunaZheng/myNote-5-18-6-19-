<template>
  <div class="index">
    <div class="space">
      <div class="cd-list div-2">
        <section
          v-for="(pro, idx) in proList"
          @click="showProInfo(idx)"
        >
          <div class="in">
            <div class="img-box"
              :lazy-load="pro.pic_url"
            >
              <div></div>
            </div>
            <div class="down">
              <div class="shop-name">
                <span class="icon-service-tianmao fl"></span>
                <div class="ellipsis">{{pro.nick}}</div>
              </div>
              <div class="info-text">
                <span v-html="pro.title"></span>
              </div>
              <div class="price-box">
                <div class="price fr">￥{{pro.view_price}}</div>
                <div>{{pro.view_sales}}</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style="color: #666; padding-top: 20px;">
        <div class="c" v-if="isLoading">努力加载中...</div>
        <div class="c" v-if="!isLoading && isLoadAll">数据加载完毕</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['g'],
  data () {
    return {
      curPage: 0,
      isLoading: false,
      isLoadAll: false,
      proList: []
    }
  },
  methods: {
    loadPage() {
      var vm = this
      if (vm.isLoading || vm.isLoadAll) {
        return
      }
      console.log('加载数据', vm.curPage)
      vm.isLoading = true
      $.getJSON('https://s.taobao.com/search?data-key=s&data-value='+(vm.curPage*44)+'&ajax=true&_ksTS=1496568710907_1255&callback=?&q=%E8%BE%A3%E6%9D%A1&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20170604&ie=utf8&bcoffset=3&ntoffset=0&p4ppushleft=1%2C48&s=0', function(data) {
        vm.curPage++
        data = data['mods']['itemlist']['data']['auctions']
        vm.proList = vm.proList.concat(data)
        vm.$nextTick(() => {
          vm.g.lazyLoad()
          vm.isLoading = false
          if (vm.curPage > 3) {
            console.log('over')
            vm.isLoadAll = true
            return
          }
        })
      })
    },
    showProInfo(idx) {
      const vm = this
      const item = vm.proList[idx]
      vm.$set(vm.g.router, 'pageIn', 'showProDetail')
      vm.$set(vm.g.router, 'url', item.detail_url)
    }
  },
  mounted() {
    var vm = this
    vm.loadPage()
    const win = $(window)
    win.off('scroll.loadPage').on('scroll.loadPage', (e) => {
      const scrollTop = win.scrollTop()
      if (scrollTop + document.documentElement.clientHeight > document.body.scrollHeight - 100) {
        vm.loadPage()
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cd-list {margin: 0 -10px;}
.cd-list section {padding: 10px;}
.cd-list section .in {background: #fff; box-shadow: 0 0 10px rgba(0,0,0,.2);}
.cd-list section .in .img-box {
  background: #ddd url(/static/img/logo-gray.png) no-repeat center;
  padding-top: 60%; position: relative;
}
.cd-list section .in .shop-name {height: 34px;}
.cd-list section .in .shop-name .icon-service-tianmao {margin-top: 10px; margin-right: 10px;}
.cd-list section .in .shop-name .ellipsis {}
.cd-list section .in .down {padding: .6em;}
.cd-list section .in .down .info-text {color: #666; font-size: 22px; overflow: hidden; margin: 15px 0; height: 3em; line-height: 1.5em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.cd-list section .in .down .price-box {color: #333;}
.cd-list section .in .down .price-box .price {color: #a00;}
</style>
