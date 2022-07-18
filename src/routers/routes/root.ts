export const root = [
  { path: '/', component: () => import('@/views/Home.vue') },
  // { path: '/auth/login', component: () => import('@/views/Login.vue') },
  { path: '/app/settings/general', component: () => import('../../components/LoginComponents/MainGeneral.vue') },
  { path: '/app/settings/advanced', component: () => import('../../components/LoginComponents/AdvancedPage.vue') }
]
