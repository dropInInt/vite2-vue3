import { createRouter, RouteRecordRaw , Router, createWebHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
 {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/Home.vue'),
  meta: {
   title: '首页'
  } 
 }
]

const router: Router = createRouter({
 history: createWebHistory(),
 routes
})

export default router