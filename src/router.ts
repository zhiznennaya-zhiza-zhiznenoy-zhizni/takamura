import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: () => import("./pages/index.vue"),
  },
  {
    name: "info",
    path: "/info",
    component: () => import("./pages/header__info.vue"),
  },
  {
    name: "map",
    path: "/map",
    component: () => import("./pages/map.vue"),
  },
  {
    name: "program",
    path: "/program",
    component: () => import("./pages/program.vue"),
  },
  {
    name: "promotion",
    path: "/promotion",
    component: () => import("./pages/promotion.vue"),
  },
  {
    name: "/cooperetion.vue",
    path: "/cooperetion",
    component: () => import("./pages/cooperation.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes: routes,
});

export default router;
