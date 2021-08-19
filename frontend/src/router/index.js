import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/create_user',
    name: 'CreateUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateUser.vue')
  },
  {
    path: '/user_account',
    name: 'UserAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserAccount.vue')
  },
  { 
    name: 'login',
    path: '/login', 
    component: Login,
  },
  { 
    name: 'profile',
    path: '/profile', 
    component: Profile, 
    props:true 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
