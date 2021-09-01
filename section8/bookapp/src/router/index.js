import Vue from 'vue'
import VueRouter from 'vue-router'
import BookIndex from '@/pages/BookIndex'
import BookSearch from '@/pages/BookSearch'
import BookEdit from '@/pages/BookEdit'

//routerを使う宣言
Vue.use(VueRouter);
//routesで定義 = [
const routes = [
  {
    path: '/',
    name: 'BookIndex',
    component: BookIndex
  },
  {
    path: '/search',
    name: 'BookSearch',
    component: BookSearch
  },
  {
    path: '/edit/:id',
    name: 'BookEdit',
    component: BookEdit
  },
  {
    path: '*',
    redirect: '/'
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
//router外部でを使う宣言
