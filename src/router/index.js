import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/Counter.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/Users.vue"),
  },
  {
    path: "/pokemon-search",
    name: "pokemon-search",
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/SearchPokemon.vue"),
  },
  {
    path: "/pokemon/:id",
    name: "pokemon-id",
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/Pokemon.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/ToDoVuex.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
