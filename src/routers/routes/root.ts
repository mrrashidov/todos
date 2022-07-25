export const root = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/app/settings/general', component: () => import('../../components/LoginComponents/General.vue') },
  { path: '/app/settings/advanced', component: () => import('../../components/LoginComponents/Advanced.vue') },
  { path: '/app/settings/theme', component: () => import('../../components/LoginComponents/Theme.vue') },
  { path: '/app/settings/productivity', component: () => import('../../components/LoginComponents/Productivity.vue')}
]
