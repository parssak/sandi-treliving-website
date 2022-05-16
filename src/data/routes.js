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
    meta: { title: "Cartwheel" },
  },
  {
    path: "/recommends",
    label: "recommends",
    name: "recommends",
    component: () => import("@/views/recommends/index.vue"),
    meta: { title: "Recommends" },
  },
  {
    path: "/talent-fund",
    label: "talent fund",
    name: "talent-fund",
    component: () => import("@/views/talent-fund/index.vue"),
    meta: { title: "Talent Fund" },
  },
  {
    path: "/next-chapter",
    label: "next chapter",
    name: "next-chapter",
    component: () => import("@/views/next-chapter/index.vue"),
    meta: { title: "Next Chapter" },
  },
  {
    path: "/press",
    label: "press",
    name: "press",
    component: () => import("@/views/press/index.vue"),
    meta: { title: "press" },
  },
  {
    path: "/contact",
    label: "contact",
    name: "contact",
    component: () => import("@/views/contact/index.vue"),
    meta: { title: "contact" },
  },
];
