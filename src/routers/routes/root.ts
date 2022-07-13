export const root = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/auth/login', component: () => import('@/views/Login.vue') }
]
