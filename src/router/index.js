import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: ()=> import('../views/Dashboard.vue')
    },
    {
        path: '/about',
        component: ()=> import('../views/About.vue')
    },
    {
        path: '/test',
        component: ()=> import('../views/Test.vue')
    },
    {
        path: '/login',
        component: ()=> import('../views/Login.vue')
    },
    {
        path: '/register',
        component: ()=> import('../views/Register.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router