import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CompositionApiPlugin from './plugins/composition-api';

Vue.config.productionTip = false;

require('./assets/styles/css/index.css');

Vue.use(CompositionApiPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
