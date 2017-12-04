<template>
  <div class="pro-info">
    <carousel :g="g" :img-list="imgList" :cur-index="0"></carousel>
    <div class="space">
      <div>
        <pro-info-item></pro-info-item>
      </div>
      <div class="rate-list"
        @click="previewImg"
      >
        <section v-for="(item, idx) in fullRate" class="space shadow">
          <div class="nick">
            <div class="fr">{{item.rateDate}}</div>
            <div>{{item.displayUserNick}}</div>
          </div>
          <div class="rate-content">{{item.rateContent}}</div>
          <div class="rate-img">
            <img :src="src" alt="" v-for="(src, _idx) in item.pics" style="width: 100px;" :preview-src="src">
          </div>
          <div class="rote-taste">{{item.auctionSku}}</div>
        </section>
      </div>
    </div>
    <div class="preview-img"
      v-show="isShowPreviewImg"
    >
      <div class="btn-close"
        @click.prevent.stop="isShowPreviewImg = false"
        @touchstart.prevent.stop="isShowPreviewImg = false"
      >
        <div class="icon-cross"></div>
      </div>
      <carousel2 :g="g" :img-list="previewSrcs" :cur-index="previewIndex"></carousel2>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Carousel2 from '../components/Carousel2'
import ProInfoItem from './ProInfoItem'

export default {
  name: 'pro-info',
  props: ['g'],
  components: {
    Carousel,
    Carousel2,
    ProInfoItem
  },
  data() {
    return {
      imgList: ["http://img.alicdn.com/bao/uploaded/i1/TB1k3NTRFXXXXaiXpXXXXXXXXXX_!!0-item_pic.jpg_600x600","http://img.alicdn.com/imgextra/i4/880734502/TB20R7RbmiJ.eBjSspoXXcpMFXa_!!880734502.jpg_600x600","http://img.alicdn.com/imgextra/i2/880734502/TB2xcEygSxjpuFjSszeXXaeMVXa_!!880734502.png_600x600","http://img.alicdn.com/imgextra/i3/880734502/TB2TNcWrVXXXXaLXpXXXXXXXXXX_!!880734502.jpg_600x600","http://img.alicdn.com/imgextra/i4/880734502/TB2eBYjlrplpuFjSspiXXcdfFXa_!!880734502.jpg_600x600"],
      curPage: 0,
      fullRate: [],
      isShowPreviewImg: false,
      previewIndex: 0,
      previewSrcs: [],
    }
  },
  methods: {
    loadPage() {
      const vm = this
      $.getJSON('https://rate.tmall.com/list_detail_rate.htm?itemId=533922732700&spuId=645236656&sellerId=880734502&order=3&currentPage=3&append=0&content=1&tagId=&posi=&picture=&ua=233UW5TcyMNYQwiAiwQRHhBfEF8QXtHcklnMWc%3D%7CUm5Ockt%2FRH9Eek9yR3tBeC4%3D%7CU2xMHDJ7G2AHYg8hAS8UKQcnCVU0Uj5ZJ11zJXM%3D%7CVGhXd1llXGhTaFNtWGVQbFZvWGVHe0B8R3tEcE91SXdJdU5xS35QBg%3D%3D%7CVWldfS0SMg00Di4VNRstWSZPNBg2YDY%3D%7CVmhIGCUFOBgkGiMXNws3DDANLREvFC8PNQ47GycZIhk5Az0IXgg%3D%7CV29PHzEfP29UYFl5R31Fe1tkXmpIcFBvUmhKdkN5QWFbb1JySn9AFjYJKQcpCTULMA9ZDw%3D%3D%7CWGFBET8RMQsxBCQaLxoiAj0INwNVAw%3D%3D%7CWWBAED4QMAU5AyMdKRwjAzoGPwJUAg%3D%3D%7CWmNDEz0TMw00CSkXLxErCzcCPwoyZDI%3D%7CW2JCEjwSMgY6Dy8RKh8iAj4AOAY7DlgO%7CXGVFFTsVNQ81ASEYLBYtDTEPNAE0ClwK%7CXWREFDoUNAE0ACAYJRwnBzsFPwsxDVsN%7CXmdHFzkXNwI8AiIcJh0oCDQKPgczB1EH%7CX2dHFzkXN2deYlt7RHlDf19hWm9NdVVpXHxAeUVlWWA2FisLJQsrFy4TKxYjdSM%3D%7CQHlZCScJKRAsFTUKNw0xES0UKREuEkQS%7CQXhYCCYIKBArHj4CPQU5GSUcIx4qHkge%7CQntbCyULKx4rFDQLNggxES0ULRAkHUsd%7CQ3tbCyULK3tOekRkXWhVaUl8R3NRa1NzT3dLaVVgWmJCfEZmWGw6GicHKQcnGyMdJhIseiw%3D%7CRH1AfV1gQH9fY1pmRnhAelpjQ39La19%2FSmpQcEtrU3NKalR0SHRUaEh1VXRIaFIE&isg=AsbGrY-d4-RLSLcGkfDZEVhnF7yS65nqTgjQhLDthemus2TNGLbE8bkJ_diF&needFold=0&_ksTS=1496663962009_2174&callback=?', function(data) {
        vm.fullRate = vm.fullRate.concat(data.rateDetail.rateList)
        console.log('d')
        vm.curPage++
      })
    },
    previewImg(e) {
      const vm = this
      $(e.target).closest('[preview-src]').each(function(idx, el) {
        vm.previewSrcs = [].slice.call(document.querySelectorAll('[preview-src]')).map(function(_el, idx) {
          if (el === _el) {
            vm.previewIndex = idx
          }
          return el.getAttribute('preview-src')
        })
        vm.isShowPreviewImg = true
      })
    }
  },
  mounted() {
    const vm = this
    vm.loadPage()
  }
}
</script>

<style scoped>
.rate-list {}
.rate-list section {margin-bottom: 15px;}
.rate-list section .nick {}
.rate-list section .rate-content {color: #666; padding: 20px 0;}
.rate-list section .rate-img {padding: 10px 0;}
.rate-list section .rate-img img {margin-right: 10px;}
.rate-list section .rote-taste {}

.preview-img {width: 100%; height: 100%; position: fixed; left: 0; top: 0; z-index: 1000; background: rgba(0,0,0,.9); overflow: hidden; white-space: nowrap;}
.preview-img .btn-close {position: absolute; right: 10px; top: 10px; padding: 10px; color: #999; z-index: 1002;}
.preview-img ul {height: 100%;}
.preview-img ul li {display: inline-block; vertical-align: top; width: 100%; height: 100%; background: no-repeat center / contain;}
</style>