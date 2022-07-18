export const root = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/auth/login", component: () => import("@/views/Login.vue") },
  { path: "/auth/signup", component: () => import("@/views/SignUp.vue") },
  {
    path: "/app/project",
    component: () => import("@/components/AppProject.vue"),
  },
  {
    path: "/app/onboard/usecase",
    component: () => import("@/components/Register/OnboardUseCase.vue"),
  },
  {
    path: "/app/onboard/proficiency",
    component: () => import("@/components/Register/OnboardProficiency.vue"),
  },
  {
    path: "/app/settings/account",
    component: () => import("@/views/LoginSetting.vue")
  }
];
