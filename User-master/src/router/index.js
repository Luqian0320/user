import Vue from 'vue'
import VueRouter from 'vue-router'
const Hxzz = () => import('../views/hxzz/Hxzz.vue')

const SaferunInfoManage = () => import('../../src/views/saferuninfo/SaferunInfoManage.vue')
const TransferInfoManage = () => import('../../src/views/transferinfo/TransferInfoManage.vue')
const QualityInfoManage = () => import('../../src/views/qualityinfo/QualityInfoManage.vue')
const DRInfoManage = () => import('../../src/views/qualityinfo/DRInfoManage.vue')
const FalseInfoManage = () => import('../../src/views/qualityinfo/FalseInfoManage.vue')
const ChangeInfoManage = () => import('../../src/views/qualityinfo/ChangeInfoManage.vue')

const ProduceInfoManage = () => import('../../src/views/produceinfo/ProduceInfoManage.vue')
const PersonnelInfoManage = () => import('../../src/views/personnelinfo/PersonnelInfoManage.vue')
const EnergyInfoManage = () => import('../../src/views/energyinfo/EnergyInfoManage.vue')
const EquipmentInfoManage = () => import('../../src/views/equipmentinfo/EquipmentInfoManage.vue')

Vue.use(VueRouter)
//定义路由，component代表组件
  const routes = [
  {
    path: '/',
    name: 'Hxzz',
    component: Hxzz,
  },
  {
    path: '/hxzz',
    name: 'Hxzz',
    component: Hxzz,
  },
  {
  	path:'/SaferunInfoManage',
  	name:'SaferunInfoManage',
  	component:SaferunInfoManage,
  },
  {
  	path:'/TransferInfoManage',
  	name:'TransferInfoManage',
  	component:TransferInfoManage,
  },
  {
  	path:'/QualityInfoManage',
  	name:'QualityInfoManage',
  	component:QualityInfoManage,
  },
  {
  	path:'/DRInfoManage',
  	name:'DRInfoManage',
  	component:DRInfoManage,
  },
  {
  	path:'/FalseInfoManage',
  	name:'FalseInfoManage',
  	component:FalseInfoManage,
  },
  {
  	path:'/ChangeInfoManage',
  	name:'ChangeInfoManage',
  	component:ChangeInfoManage,
  },
  {
  	path:'/PersonnelInfoManage',
  	name:'PersonnelInfoManage',
  	component:PersonnelInfoManage,
  },
  {
  	path:'/ProduceInfoManage',
  	name:'ProduceInfoManage',
  	component:ProduceInfoManage,
  },
  {
  	path:'/EnergyInfoManage',
  	name:'EnergyInfoManage',
  	component:EnergyInfoManage,
  },
  {
  	path:'/EquipmentInfoManage',
  	name:'EquipmentInfoManage',
  	component:EquipmentInfoManage,
  },
  
]
//实例化
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
