Vue.component('page-profile', {
  template:  `
    <div id="profile">
      <div class="inner">
        <div class="bg-box"></div>
        <div class="forward">
          <div class="avatar-box">
            <div class="ib">
              <img src="static/img/face.jpg" alt="">
              <div class="username">摘星fy</div>
            </div><div class="vm"></div>
          </div>
          <div class="nav">
            <ul>
              <li>
                <a href="javascript:">
                  <i class="icon-home2"></i>
                  <span>首页</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="icon-clubs"></i>
                  <span>web前端</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="icon-lifebuoy"></i>
                  <span>移动前端</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="icon-map"></i>
                  <span>授人以渔</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="icon-bug"></i>
                  <span>UI设计</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="icon-leaf"></i>
                  <span>WP视点</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="icon-fire"></i>
                  <span>程序人生</span>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <i class="icon-airplane"></i>
                  <span>关于留言</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  props: ['g'],
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
})