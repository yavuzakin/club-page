import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vision from "../views/Vision.vue";
import Mission from "../views/Mission.vue";
import Events from "../views/Events.vue";
import Products from "../views/Products.vue";
import Gallery from "../views/Gallery.vue";
import ContactUs from "../views/ContactUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vision",
    name: "Vision",
    component: Vision,
  },
  {
    path: "/mission",
    name: "Mission",
    component: Mission,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/contactus",
    name: "Contact Us",
    component: ContactUs,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
