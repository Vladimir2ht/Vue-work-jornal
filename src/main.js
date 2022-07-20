import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Table from './components/Table';
import Card from './components/Card';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Table},
  { name: 'person',
    path: '/person',
    // href: '_blank',
    component: Card,
    params: {number: 20},
    props(route) {
      return { number: route.params.number}
    }
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
