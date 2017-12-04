<template>
  <div class="index">
    <div class="space">
      <div class="cd-list div-2">
        <section
          v-for="(pro, idx) in proList"
        >
          <div class="in">
            <div class="img-box"
              :lazy-load="pro.pic_url"
            ></div>
            <div class="down">
              <div class="title-text">
                <span>赵四小卖部</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'index',
  props: ['g'],
  data () {
    return {
      proList: []
    }
  },
  mounted() {
    var vm = this
    $.getJSON("https://s.taobao.com/search?data-key=s&data-value=44&ajax=true&_ksTS=1496408181810_892&callback=?&q=零食百货&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20170602&ie=utf8&bcoffset=4&p4ppushleft=1%2C48", function(data) {
      data = data['mods']['itemlist']['data']['auctions']
      vm.proList = data
      vm.$nextTick(() => { //获取更新后的 DOM
        console.log('a')
        vm.g.lazyLoad()
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
