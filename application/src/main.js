import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/custome.css'

import signin from './components/signin.vue';
import signup from './components/Signup.vue';
import forgot from './components/Forgot.vue';
// import appvue from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = true
const routes = [
  {path : '/signin', component : signin },
  // {path : '/signup', component : signup },
  {path : '/', component : signup},
  {path : '/forgot', component : forgot}
];
const router = new VueRouter({
  routes 
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
