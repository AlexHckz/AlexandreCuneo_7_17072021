import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import AddPost from "@/views/AddPost.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add_post',
    name: 'Add Post',
    component: AddPost
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
    props: true
  },
  {
    name: 'admin',
    path: '/admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
