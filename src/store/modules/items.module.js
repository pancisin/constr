const ADD_ITEM = "ADD_ITEM";

const state = {
  items: []
};

const getters = {
  items: state => state.items
};

const actions = {
  addItem: (commit, item) => {
    commit(ADD_ITEM, { item });
  }
};

const mutations = {
  [ADD_ITEM]: (state, { item }) => {
    state.items.push(item);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
