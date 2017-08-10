/*jshint esversion:6*/
import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import {routes} from './router';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history', /*le mode hash permettra de mettre un "#" avant l'url*/
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
