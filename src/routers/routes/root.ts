export const root = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/auth/login", component: () => import("@/views/Login.vue") },
  { path: "/auth/signup", component: () => import("@/views/SignUp.vue") },
];
