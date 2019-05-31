/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  /*此路由项的name和meta.title的dashboard不能大写否则面包屑路径重叠，
  redirect和path的dashboard大写会有跳转bug*/
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [{
      path: '/dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    hidden: true,
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  {
    path: '/systeManage',
    name: 'systeManage',
    component: Layout,
    meta: {
      title: 'SystemManagement',
      icon: 'form'
    },
    children: [
      {
        path: '/systeManage/resource',
        name: 'resource',
        // redirect: '/systeManage/resource/keyValue',
        component: () => _import('systeManage/resource/index'),
        meta: { title: 'Resource', icon: 'example' },
        children: [
          {
            path: 'keyValue',
            name: 'keyValue',
            component: () => _import('systeManage/resource/components/keyValue'),
            meta: { title: 'KeyValueParameter' }
          },
          {
            path: 'dataDictionary',
            name: 'dataDictionary',
            component: () => _import('systeManage/resource/components/dataDictionary'),
            meta: { title: 'DataDictionary' }
          },
          {
            path: 'functionalModule',
            name: 'functionalModule',
            component: () => _import('systeManage/resource/components/functionalModule'),
            meta: { title: 'FunctionalModule' }
          }
        ]
      },
      {
        path: '/systeManage/permission',
        name: 'permission',
        component: () => _import('systeManage/permission/index'),
        meta: { title: 'Permission', icon: 'example' },
        children: [
          {
            path: 'rolesManage',
            name: 'rolesManage',
            component: () => _import('systeManage/permission/components/rolesManage'),
            meta: { title: 'RoleManagement' }
          },
          {
            path: 'departmentManage',
            name: 'departmentManage',
            component: () => _import('systeManage/permission/components/departmentManage'),
            meta: { title: 'DepartmentManagement' }
          },
          {
            path: 'usersManage',
            name: 'usersManage',
            component: () => _import('systeManage/permission/components/usersManage'),
            meta: { title: 'UserManagement' }
          }
        ]
      }
    ]
  },
  {
    path: '/orderManage',
    name: 'orderManage',
    component: Layout,
    hidden: true,
    meta: { title: '订单管理', icon: 'example' },
    alwaysShow: true,
    children: [
      {
        path: 'reservationListSearch',
        name: 'reservationListSearch',
        component: () => _import('orderManage/reservationListSearch'),
        meta: { title: '预约单查询', icon: 'form' }
      }
    ]
  },
  {
    path: '/inventoryManage',
    name: 'inventoryManage',
    component: Layout,
    hidden: true,
    meta: { title: '库存管理', icon: 'example' },
    alwaysShow: true,
    children: [
      {
        path: 'boxPositionRelation',
        name: 'boxPositionRelation',
        component: () => _import('inventoryManage/boxPositionRelation'),
        meta: { title: '箱位关联设置', icon: 'form' }
      }
    ]
  },

    /*
    * meta.title和name不能为undefined或null，但name可任意填写
    * */
  {
    path: '/OrderManagement',
    component: Layout,
    children: [
      {
        path: '',
        name: 'OrderManagement',
        component: () => import('@/views/OrderManagement/orderManage'),
        meta: { title: 'OrderManagement', icon: 'example' }
      }
    ]
  },

  {
    path: '/InventoryManagement',
    component: Layout,
    children: [
      {
        path: '',
        name: 'InventoryManagement2',
        component: () => import('@/views/InventoryManagement/inventoryManagement'),
        meta: { title: 'InventoryManagement', icon: 'example' }
      }
    ]
  },

  {
    path: '/SchedulingManagement',
    component: Layout,
    children: [
      {
        path: '',
        name: 'SchedulingManagement',
        component: () => import('@/views/SchedulingManagement/schedulingManagement'),
        meta: { title: 'SchedulingManagement', icon: 'example' }
      }
    ]
  },

  {
    path: '/MaintenanceCleaningManagement',
    component: Layout,
    children: [
      {
        path: '',
        name: 'MaintenanceCleaningManagement',
        component: () => import('@/views/MaintenanceCleaningManagement/maintenanceCleaningManagement'),
        meta: { title: 'MaintenanceCleaningManagement', icon: 'example' }
      }
    ]
  },

  { path: '/hhh', component: () => import('@/views/i18n-demo/test'), hidden: true },

  { path: '/hehehe', component: () => import('@/views/i18n-demo/hehehe'), hidden: true },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

