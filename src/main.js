import Vue from 'vue';
import App from './App';

import router from './router';
import store from './store';

import VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import './assets/core.less';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
});
