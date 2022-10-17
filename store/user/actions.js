export default {
  async ActionLogin({ dispatch }, payload) { // dispatch puxa outra action
    return await this.$axios.$post("/user/login", payload)
      .then((r) => {
        console.log(r)
        dispatch('ActionSetUser', r.user)
        dispatch('ActionSetToken', r.token)
        dispatch('ActionCheckToken', true)
      })
  },
  ActionSetUser({ commit }, payload) {
    commit('setUser', payload)
  },
  ActionSetToken({ commit }, payload) {
    this.$axios.setToken(payload, 'Bearer')
    this.$cookies.set('token', payload, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
    commit('setToken', payload)
  },
  ActionSetTokenVerify({ commit }, payload) {
    commit('setTokenVerify', payload)
  },

  ActionCheckToken({ dispatch, state }) {
    if (!state.token) {
      const token = this.$cookies.get('token');
      dispatch('ActionSetToken', token);
      return dispatch('ActionLoadSession')
    }
  },
  async ActionLoadSession({ dispatch, commit }) {
    await this.$axios.$get("user/auth")
      .then((r) => {
        dispatch('ActionSetUser', r)
        dispatch('ActionSetTokenVerify', true)
      })
      .catch(() => {
        dispatch('ActionSetTokenVerify', false)
        dispatch('ActionSignOut')
      })
  },
  ActionSignOut({ commit }) {
    commit('setUser', null)
    commit('setToken', null)
  }
}