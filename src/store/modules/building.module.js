const SET_BUILDING = 'SET_BUILDING';

const state = {
  building: {}
};

const getters = {
  building: state => state.building
};

const actions = {
  setBuilding: ({ commit }, building) => {
    commit(SET_BUILDING, { building });
  }
};

const mutations = {
  [SET_BUILDING]: (state, { building }) => {
    state.building = { ...building };
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
