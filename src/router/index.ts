import { createRouter, createWebHashHistory } from "vue-router";

import { clearPending } from "@/apis";

const Home = () => import("@/pages/home/home.vue");
const Mine = () => import("@/pages/mine/mine.vue");
const Login = () => import("@/pages/login/login.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine,
  },
];

const whiteList = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

routes.push(...whiteList);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  clearPending();
  const isWhiteRoute = whiteList.some((route) => {
    return route.path.includes(to.path);
  });
  if (isWhiteRoute) {
    next();
  } else {
    const isLogin = true;
    if (isLogin) {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

export { router };
