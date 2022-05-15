export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/about",
    label: "about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "About" },
  },
  {
    path: "/womenmind",
    label: "womenmind",
    name: "womenmind",
    component: () => import("@/views/womenmind/index.vue"),
    meta: { title: "Womenmind" },
  },
  {
    path: "/speaking",
    label: "speaking",
    name: "speaking",
    component: () => import("@/views/speaking/index.vue"),
    meta: { title: "Speaking" },
  },
  {
    path: "/cartwheel",
    label: "cartwheel",
    name: "cartwheel",
    component: () => import("@/views/cartwheel/index.vue"),
    meta: { title: "cartwheel" },
  },
];
