import path from "path";

export const root = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/auth/login", component: () => import("@/views/Login.vue") },
  { path: "/auth/signup", component: () => import("@/views/SignUp.vue") },
  { path: "/features", component: () => import("@/views/Features.vue") },
  {
    path: "/app/project",
    component: () => import("@/components/AppProjectComp.vue"),
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
  },
  {
    path: "/app/settings/subscription",
    component: () => import("@/views/SettingSubscription.vue")
  },
  
];
