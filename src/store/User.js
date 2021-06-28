export const UserModule = {
	namespaced: true,

  state: {
    user: null
  },


  // function that affect the state
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },


  // functions that you call throughout your appliaction that call mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    }
  },

}