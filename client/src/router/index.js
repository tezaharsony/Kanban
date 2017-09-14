import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Kanban from '@/components/Kanban'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Kanban
        }
      ]
    },
    {
      path: '/add',
      component: Form
    }
  ]
})
