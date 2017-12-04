<template>
  <div class="hron">
    <div class="space">
      <div class="ask-list">
        <section v-for="n in 10">
          <div class="question">如何评价特朗普决定退出《巴黎协定》？</div>
          <div class="info">
            <div class="info-text">本周新闻点评 - 巴黎协定?这只是第一步! -2017-06-03 - 知乎专栏 本周我们将所有的关注度放在了川普总统宣布美国退出巴黎协定上。现在国家媒体大肆抨击川普的不负责行为，认为其将“美国第一”变成了“美国独立”。还有分析认为，这是美国总统不成熟和刚愎… 显示全部</div>
            <div class="author">作者：JackyQ</div>
            <div class="link ellipsis">链接：https://www.zhihu.com/question/60521020/answer/178196974</div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hron',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      iconList: ['icon-service-zyms{display:inline-block;*display:inline;*zoom:1;font-size:0;background:url(//img.alicdn.com/tps/i3/TB1bh5IMpXXXXacaXXXrG06ZpXX-316-272.png);background-repeat:no-repeat;_background-image:url', 'icon-service-china-made-l', 'icon-service-tianmao-large', 'icon-service-huodaofukuan-sort', 'icon-service-qiye-large', 'icon-service-mianfeisongzhuang', 'icon-service-zhichianzhuang', 'icon-service-tianmaojinkou', 'icon-service-tianmaoguoji', 'icon-service-remai', 'icon-service-baoshui', 'icon-service-shiyong', 'icon-service-ershou', 'icon-service-new', 'icon-service-free16', 'icon-service-free', 'icon-service-tesechina-l', 'icon-service-quanqiugou-l', 'icon-service-qiyemaijia-l', 'icon-service-paimaihui-l', 'icon-service-jiyoujia-l', 'icon-service-jinpaimaijia-l', 'icon-service-zyms', 'icon-service-zidongfahuo', 'icon-service-zidongchongzhi', 'icon-service-zhijian', 'icon-service-zhidingpeisong', 'icon-service-zhengpin', 'icon-service-yunfeixian', 'icon-service-yuding', 'icon-service-youjinongye', 'icon-service-yiliaoqixie', 'icon-service-yiliaofuwu', 'icon-service-ycdbz', 'icon-service-xuniwupin', 'icon-service-xinyongzhifu', 'icon-service-xinyongka', 'icon-service-xinpin', 'icon-service-xiaobao', 'icon-service-wuyoutuihuanhuo', 'icon-service-tuihuochengnuo', 'icon-service-tiedingchuyou', 'icon-service-tianmao', 'icon-service-tesechina', 'icon-service-taogold', 'icon-service-shunfengbaoyou', 'icon-service-shouquan', 'icon-service-shiyong-new', 'icon-service-shijiayoufang', 'icon-service-rzsh', 'icon-service-quanqiugou', 'icon-service-quanguolianbao', 'icon-service-qs', 'icon-service-qiyemaijia', 'icon-service-qiye', 'icon-service-qitiantuihuo', 'icon-service-qitiantuihuan', 'icon-service-qitian', 'icon-service-qitian-jishi', 'icon-service-posunbuji', 'icon-service-pinzhichengnuo', 'icon-service-peifu', 'icon-service-paimaihui', 'icon-service-otcyaopin', 'icon-service-lvxing', 'icon-service-locallifeshop', 'icon-service-juhuasuan', 'icon-service-jiyoujia', 'icon-service-jishou', 'icon-service-jinpaimaijia', 'icon-service-jiayipeisan', 'icon-service-jianzihao', 'icon-service-huodaofukuan', 'icon-service-huodaofukuan-tmall', 'icon-service-haiwaizhiyou', 'icon-service-guojiarenzheng', 'icon-service-gongyibaobei', 'icon-service-fuwu', 'icon-service-free-chang', 'icon-service-fahuoshijian', 'icon-service-ershouche', 'icon-service-ershou-new', 'icon-service-dianzipingzheng', 'icon-service-danbao', 'icon-service-daichong', 'icon-service-chufangyao', 'icon-service-china-made', 'icon-service-baoxian', 'icon-service-baojian', 'icon-service-7tianjia']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hron {}
.hron .ask-list {}
.hron .ask-list section {background: #fff; padding: 20px; border-bottom: 1px solid #ddd;}
.hron .ask-list section .question {}
.hron .ask-list section .info {}
.hron .ask-list section .info .info-text {color: #666; margin: 20px 0;}
.hron .ask-list section .info .author {color: #333;}
.hron .ask-list section .info .link {color: #09f;}
</style>
