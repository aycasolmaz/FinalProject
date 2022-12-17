import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/Projects.vue')
		},
		{
			path: '/music',
			component: () => import('../views/Music.vue')
		},
		{
			path: '/food',
			component: () => import('../views/Food.vue')
		},
		{
			path: '/sailing',
			component: () => import('../views/Sailing.vue')
		},
		{
			path: '/art',
			component: () => import('../views/Art.vue')
		},
		{
			path: '/turkey',
			component: () => import('../views/Turkey.vue')
		},
		{
			path: '/next-steps',
			component: () => import('../views/Steps.vue')
		},
		{
			path: '/settings',
			component: () => import('../views/Settings.vue')
		}
	],
})

export default router