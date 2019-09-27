import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/page'
import axios from '@/plugins/axios'
import store from '@/store'
import todoModule from '@/components/page/Todo/store'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      async beforeEnter (to, from, next) {
        try {
          if (store) store.registerModule('todo', todoModule)
          const todolist = await axios.get('/todo/list')
          await store.commit('todo/SET_LIST', todolist.data)
          next()
        } catch (error) {
          console.log(error)
        }
      }
    }
  ]
})

router.beforeResolve(async (to, from, next) => {
  const data = { email: 'test@gmail.com', password: '1234' } // token 인증을 위한 USER 정보
  const token = localStorage.getItem('accessToken')
  try {
    // if (token){
    //   const res = await axios.post('/auth/token', {token})
    //   store.commit('SET_USER', res.data)
    //   next()
    // } else {
    //   const res = await axios.post('/auth', { data })
    //   localStorage.setItem('token', res.data)
    //   next()
    // }
    const res = await axios.post('/todo/login',  data )
    console.log(res.data)

    next()
  } catch (error) {
    console.log(error)
  }
})

export default router