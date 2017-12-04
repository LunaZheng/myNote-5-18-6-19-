<template>
  <div id="app">
    <!-- http:/xxx.com/#/user/king/  -->
    <!-- <div>
      <router-link to="/video">电影分类</router-link>
    </div>
    <router-view></router-view> -->
    <note-vue-x></note-vue-x>
  </div>
</template>

<script>
import NoteVueX from './NoteVueX'

export default {
  name: 'app',
  components: {
    NoteVueX
  },
  data() {
    return {
      username: '摘星fy'
    }
  }
}
</script>

<style>

</style>
