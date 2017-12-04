<template>
  <div class="user">
    <div class="shadow">
      <div class="avatar-box">
        <div class="ib">
          <div class="avatar"></div>
          <div class="username">摘星fy</div>
        </div><div class="vm"></div>
      </div>
      <order :g="g"></order>
      <!-- <div class="my-order">
        <section
          v-for="(item, idx) in orderList"
          :class="{on: item.name === g.router.orderName}"
        >
          <a href="javascript:" class="in">
            <i :class="['icon', item.icon]"></i>
            <span>{{item.name}}</span>
          </a>
        </section>
      </div> -->
    </div>
    <div class="space">
      <div class="use-list space shadow">
        <section> 
          <a class="in" href="javascript:">
            <div class="fr">
              <i class="icon-circle-right"></i>
            </div>
            <div>卡券包</div>
          </a>
        </section>
        <section>
          <a class="in" href="javascript:">
            <div class="fr">
              <i class="icon-circle-right"></i>
            </div>
            <div>花呗</div>
          </a>
        </section>
        <section>
          <a class="in" href="javascript:">
            <div class="fr">
              <i class="icon-circle-right"></i>
            </div>
            <div>会员中心</div>
          </a>
        </section>
      </div>
      <div class="use-list space shadow">
        <section>
          <a class="in" href="javascript:">
            <div class="fr">
              <i class="icon-circle-right"></i>
            </div>
            <div>我的小蜜</div>
          </a>
        </section>
        <section>
          <a class="in" href="javascript:">
            <div class="fr">
              <i class="icon-circle-right"></i>
            </div>
            <div>我的问答</div>
          </a>
        </section>
        <section>
          <a class="in" href="javascript:">
            <div class="fr">
              <i class="icon-circle-right"></i>
            </div>
            <div>我的圈子</div>
          </a>
        </section>
        <section>
          <a class="in" href="javascript:">
            <div class="fr">
              <i class="icon-circle-right"></i>
            </div>
            <div>我的评价</div>
          </a>
        </section>
        <section>
          <a class="in" href="javascript:">
            <div class="fr">
              <i class="icon-circle-right"></i>
            </div>
            <div>我的分享</div>
          </a>
        </section>
      </div>
    </div>
    <div class="space" style="padding-top: 0; margin-top: -15px;">
      <a href="javascript:" class="btn-logout">退出登录</a>
    </div>
  </div>
</template>

<script>
import Order from './Order'

export default {
  name: 'user',
  props: ['g'],
  components: {
    Order
  },
  data () {
    return {

    }
  },
  mounted() {
    var vm = this
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {}
.user .avatar-box {height: 240px; text-align: center; color: #fff; background: #fecf5b radial-gradient(#fec64c 80%, transparent 80%) 50%/80px 80px; position: relative; z-index: 2;}
.user .avatar-box .avatar {width: 100px; height: 100px; background: url(/static/img/face.jpg) no-repeat center / cover; border-radius: 50%; border: 1px solid #fff; margin-bottom: 10px; display: inline-block;}
.user .avatar-box .username {font-size: 30px;}

.use-list {margin-bottom: 20px; background: #fff; padding-top: 10px; padding-bottom: 10px;}
.use-list section {padding: 15px 0; border-bottom: 1px solid #ddd;}
.use-list section:last-child {border: none;}

.btn-logout {display: block; line-height: 2em; background: #d9534f; text-align: center; color: #fff; border-radius: 4px; border: 1px solid #d43f3a;}
</style>
