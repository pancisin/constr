const SET_BUILDING = 'SET_BUILDING';
const ADD_FLOOR = 'ADD_FLOOR';

const state = {
  building: {
    floors: []
  }
};

const getters = {
  building: state => state.building
};

const actions = {
  setBuilding: ({ commit }, building) => {
    const b = {
      ...building,
      floors: [ ...building.floors ],
      height: building.floors.reduce((acc, cur) => {
        return acc + cur.height;
      }, 0)
    }

    commit(SET_BUILDING, { building: b });
  },
  addFloor: ({ commit }) => {
    commit(ADD_FLOOR);
  }
};

const mutations = {
  [SET_BUILDING]: (state, { building }) => {
    state.building = { ...building };
  },
  [ADD_FLOOR]: (state) => {
    state.building.floors.push({
      index: state.building.floors.length
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
