import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false

Vue.http.options.root = '';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
