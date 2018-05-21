import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index/index'
import info from '@/pages/index/info'
import coach from '@/pages/index/coach'
import coachdetail from '@/pages/index/coachdetail'
import service from '@/pages/index/service'
import message from '@/pages/index/message'
import messagedetail from '@/pages/index/messagedetail'
import active from '@/pages/index/active'
import activedetail from '@/pages/index/activedetail'
import subordercurr from '@/pages/index/subordercurr'

import signup from '@/pages/signup/signup'

import shop from '@/pages/shop/shop'

import my from '@/pages/my/my'
import orderlist from '@/pages/my/orderlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index' },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/coach',
      name: 'coach',
      component: coach
    },
    {
      path: '/coachdetail',
      name: 'coachdetail',
      component: coachdetail
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/messagedetail',
      name: 'messagedetail',
      component: messagedetail
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },
    {
      path: '/activedetail',
      name: 'activedetail',
      component: activedetail
    },
    {
      path: '/subordercurr',
      name: 'subordercurr',
      component: subordercurr
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: orderlist
    }
  ]
})
