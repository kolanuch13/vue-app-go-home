import './assets/scss/index.scss';
import App from './App.vue';
import Vue from "vue";
import VueRouter from "vue-router";
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// createApp(App).mount("#app");