import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Hxzz = () => import('../views/hxzz/Hxzz.vue')

const ComponyInfoManage = () => import('../../src/views/componyinfo/ComponyInfoManage.vue')
const PostInfoManage = () => import('../../src/views/postinfo/PostInfoManage.vue')
const OrderInfoManage = () => import('../../src/views/orderinfo/OrderInfoManage.vue')
const PostType = () => import('../views/datadictionary/DataDictionary.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Hxzz',
    component: Hxzz
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/componyinfomanage',
        name: '企业信息',
        component: ComponyInfoManage,
      },
      {
        path: '/postinfomange',
        name: '岗位信息',
        component: PostInfoManage,
      },
      {
        path: '/orderinfomange',
        name: '订单信息',
        component: OrderInfoManage,
      },
      {
        path: '/datamangeinfo',
        name: '订单信息',
        component: PostType,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
