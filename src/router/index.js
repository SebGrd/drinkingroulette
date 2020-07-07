import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '../views/Loading.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Loading',
        component: Loading
    },
    {
        path: '/menu',
        name: 'Menu',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Menu.vue')
    },
    {
        path: '/drinks-selection',
        name: 'DrinksSelection',
        props: true,
        component: () => import('../views/DrinksSelection.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
