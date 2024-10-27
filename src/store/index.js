import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      teams: [],
      filteredTeams: [],
      followed: {},
    };
  },

  mutations: {
    setTeams(state, teams) {
      state.teams = teams;
    },
    filterTeams(state, filteredTeams) {
      state.filteredTeams = filteredTeams;
    },
    setFollowed(state, { id, value }) {
      if (state.followed[id]) {
        delete state.followed[id];
      } else {
        state.followed = { ...state.followed, [id]: value };
      }
    },
  },

  actions: {
    setTeams({ commit }, teams) {
      commit("setTeams", teams);
    },

    filterTeams({ commit }, filteredTeams) {
      commit("filterTeams", filteredTeams);
    },

    setFollowed({ commit }, { id, value }) {
      commit("setFollowed", { id, value });
    },
  },

  getters: {
    allTeams(state) {
      return state.teams;
    },

    allFilteredTeams(state) {
      return state.filteredTeams;
    },

    allFollowed(state) {
      return state.followed;
    },

    followedCount(state) {
      return Object.keys(state.followed).length;
    },
  },
});

export default store;
