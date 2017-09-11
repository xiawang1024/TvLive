import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import play from '@/components/Play'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/play',
            name: 'play',
            component: play
        }
    ]
})
