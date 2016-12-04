<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <hello></hello>
    <div class="download">
      <a href="zbj://jump=wapactivity.dev.zbjdev.com/reduce-activity/index">打开app具体页面</a>
    </div>
    <div class="download"><a href="zbj://">启动app</a></div>
    <div><router-link :to="{ name: 'Top' }">go to Top page</router-link></div>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Top from './components/Top.vue'

export default {
  name: 'app',
  components: {
    Hello,
    Top
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.download {
  height: 50px;
}
</style>
