import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Stores from "../views/Stores.vue";
import Articles from "../views/Articles.vue";
import FormArticle from "../views/FormArticle.vue";
import FormStore from "../views/FormStore.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/stores",
    name: "stores",
    component: Stores
  },
  {
    path: "/articles/create",
    name: "articles-create",
    component: FormArticle
  },
  {
    path: "/articles",
    name: "articles",
    component: Articles
  },
  {
    path: "/stores/create",
    name: "stores-create",
    component: FormStore
  }

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
