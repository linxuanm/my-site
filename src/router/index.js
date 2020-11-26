import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/Cover.vue')
        }
    ],
    mode: 'history'
});