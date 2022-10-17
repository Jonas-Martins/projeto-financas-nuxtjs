export default {
  setUser(state, payload) {
    state.user = payload
  },
  setToken(state, payload) {
    state.token = payload
  },
  setTokenVerify(state, payload) {
    state.tokenVerify = payload
  }
}