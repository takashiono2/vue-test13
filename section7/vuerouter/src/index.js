import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
import NotFound from '@/components/NotFound.vue'
import Item from '../views/Item.vue'
import User from '@/views/User.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'
import HomeSub from '@/components/HomeSub.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    //コンポーネント設定名前付きHomeSub、名前なし Home,
  
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '',//bookのパラメーター表示
    name:'Book',
    component: BookDetail,//以下propsを関数でデータをやりとりする。ガイド参照{id,title,content}
    props: route => ({})
  },
  {
    path:'/item/:id',
    name:'Item',
    component: Item,
    // beforeEnter:(to, from, next)=> {

    // }
  },
  {
    path:'/user',
    component: User,//ネストされたルートにはnameは使えないので、childrenオプションを使う

      {
        path:'profile',
        component: UserProfile
      },
      {
        path: 'post',
        component: UserPost
      }

  },
  {//pathで該当がなかったら
    ,
    name:'NotFound',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next)=>{
//   console.log(to)
//   console.log(from)
//   next()
// })

export default router
