/* eslint-disable no-new */
// 入口js
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 注册全局组件标签
import {Button} from 'mint-ui';
Vue.component(Button.name, Button);
// Vue.component(Tost.name, Tost);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
