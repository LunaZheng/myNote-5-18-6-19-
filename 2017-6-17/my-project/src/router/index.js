import Vue from 'vue'
import Router from 'vue-router'
import Video from '@/components/Video'
import VideoList from '@/components/VideoList'
import VideoBrief from '@/components/VideoBrief'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/video/:videoType',
      name: 'VideoList',
      component: VideoList
    },
    {
      path: '/video/:videoType/:videoName',
      name: 'VideoBrief',
      component: VideoBrief
    },
  ]
})
