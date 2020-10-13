import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Hxzz = () => import('../views/hxzz/Hxzz.vue')

const SaferunInfoManage = () => import('../../src/views/saferuninfo/SaferunInfoManage.vue')
const TransferInfoManage = () => import('../../src/views/transferinfo/TransferInfoManage.vue')
const QualityInfoManage = () => import('../../src/views/qualityinfo/QualityInfoManage.vue')
const DRInfoManage = () => import('../../src/views/qualityinfo/DRInfoManage.vue')
const FalseInfoManage = () => import('../../src/views/qualityinfo/FalseInfoManage.vue')

const ComponyInfoManage = () => import('../../src/views/componyinfo/ComponyInfoManage.vue')
const PostInfoManage = () => import('../../src/views/postinfo/PostInfoManage.vue')
const OrderInfoManage = () => import('../../src/views/orderinfo/OrderInfoManage.vue')
const PostType = () => import('../views/datadictionary/DataDictionary.vue')
Vue.use(VueRouter)
//定义路由
  const routes = [
  // {
  //   path: '/',
  //   name: 'Hxzz',
  //   component: Hxzz,
  // },
  // {
  // 	path:'/',
  // 	name:'SaferunInfoManage',
  // 	component:SaferunInfoManage,
  // },
  // {
  // 	path:'/',
  // 	name:'TransferInfoManage',
  // 	component:TransferInfoManage,
  // },
  // {
  // 	path:'/',
  // 	name:'QualityInfoManage',
  // 	component:QualityInfoManage,
  // },
  // {
  // 	path:'/',
  // 	name:'DRInfoManage',
  // 	component:DRInfoManage,
  // },
  {
  	path:'/',
  	name:'FalseInfoManage',
  	component:FalseInfoManage,
  },
  
  
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  //   children:[
  //     {
  //       path: '/componyinfomanage',
  //       name: '企业信息',
  //       component: ComponyInfoManage,
  //     },
  //     {
  //       path: '/postinfomange',
  //       name: '岗位信息',
  //       component: PostInfoManage,
  //     },
  //     {
  //       path: '/orderinfomange',
  //       name: '订单信息',
  //       component: OrderInfoManage,
  //     },
  //     {
  //       path: '/datamangeinfo',
  //       name: '订单信息',
  //       component: PostType,
  //     },
  //   ]
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
