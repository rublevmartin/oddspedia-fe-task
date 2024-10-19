import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      teams: [],
      filteredTeams: [],
      followed: [],
    };
  },

  mutations: {
    setTeams(state, teams) {
      state.teams = teams;
    },
    filterTeams(state, filteredTeams) {
      state.filteredTeams = filteredTeams;
    },
    setFollowed(state, followed) {
      state.followed = followed;
    },
  },

  actions: {
    setTeams({ commit }, teams) {
      commit("setTeams", teams);
    },

    filterTeams({ commit }, filteredTeams) {
      commit("filterTeams", filteredTeams);
    },

    setFollowed({ commit }, followed) {
      commit("setFollowed", followed);
      console.log(followed);
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
  },
});

export default store;
