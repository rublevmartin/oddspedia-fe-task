import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      teams: [],
      filteredTeams: [],
    };
  },

  mutations: {
    setTeams(state, teams) {
      state.teams = teams;
    },
    filterTeams(state, filteredTeams) {
      state.filteredTeams = filteredTeams;
    },
  },

  actions: {
    setTeams({ commit }, teams) {
      commit("setTeams", teams);
    },

    filterTeams({ commit }, filteredTeams) {
      commit("filterTeams", filteredTeams);
    },
  },

  getters: {
    allTeams(state) {
      return state.teams;
    },

    allFilteredTeams(state) {
      return state.filteredTeams;
    },
  },
});

export default store;
