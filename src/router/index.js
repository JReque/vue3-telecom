import { createRouter, createWebHistory } from 'vue-router';
import CustomerListView from '../views/CustomerListView.vue';
import CustomerDetailView from '../views/CustomerDetailView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CustomerListView,
  },
  {
    path: '/customers',
    name: 'customer',
    component: CustomerListView,
  },
  {
    path: '/customer/:id',
    name: 'customer-detail',
    component: CustomerDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
