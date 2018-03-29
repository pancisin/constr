import ItemsModule from './modules/items.module';
import BuildingModule from './modules/building.module';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  modules: {
    ItemsModule,
    BuildingModule
  }
});

export default store;
