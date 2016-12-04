/**
 * Created by lichunyan on 16/11/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import Top from '../components/Top.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Hello
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  }
]

const router = new Router({
  routes
})

export default router
