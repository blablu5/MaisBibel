import { createApp } from 'vue'
import App from './App.vue'


import { createRouter, createWebHistory } from 'vue-router'
import Startseite from './views/Startseite.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Startseite
		},
		{
			path: '/Bibel',
			component: () => import('./views/Bibel.vue')
		},
        {
            path: '/Gebote',
            component: () => import('./views/Gebote.vue')
        },
        {
            path: '/team',
            component: () => import('./views/Gebote.vue')
        },
		{
			path: '/Rekrutieren trenieren',
			component: () => import('./views/Rekrutieren.vue')
		}
	],
})



import './index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')