import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Instructors from '@/components/Instructors';
import Students from '@/components/Students';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/Instructors',
      component: Instructors
    },
    {
      path: '/Students',
      component: Students
    }
  ]
})

import { authGuard } from "../auth/authGuard";

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // .. other routes ..
    {
      path: "/students",
      name: "students",
      component: Students,
      beforeEnter: authGuard
    }
  ]
});
