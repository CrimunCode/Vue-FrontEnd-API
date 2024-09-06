import { createWebHistory, createRouter } from "vue-router";

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import User from '../views/User.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
            requireAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

//Validaciòn de ruta login
router.beforeEach((to, from, next) => {
 //const auth
})

export default router;