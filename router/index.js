import { createRouter, createWebHistory } from "vue-router";

import Catalog from "../pages/Catalog.vue";
import Cart from "../pages/Cart.vue";
import Delivery from "../pages/Delivery.vue";
import Payment from "../pages/Payment.vue";

const routes = [
  { path: "/", component: Catalog },
  { path: "/cart", component: Cart },
  { path: "/delivery", component: Delivery },
  { path: "/payment", component: Payment }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;