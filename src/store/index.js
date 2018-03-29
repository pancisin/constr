import ItemsModule from './modules/items.module';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  modules: {
    ItemsModule
  }
});

export default store;
