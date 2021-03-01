import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Instructors from '@/components/Instructors';
import Students from '@/components/Students';
import Login from '@/components/Login';

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
    },
    {
      path: '/Login',
      component: Login
    }
  ]
})