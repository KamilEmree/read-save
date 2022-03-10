import {createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        name : 'Book-Page',
        path : '/',
        component : () => import('@/views/List-Page.vue'),
    },
    {
        name : 'Add-Page',
        path : '/Add',
        component : () => import('@/views/Add-Page.vue'),
    }
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router;