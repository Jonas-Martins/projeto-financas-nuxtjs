export default {
  hasToken({ token }) {
    return !!token
  },
  tokenVerify(state) {
    return state.tokenVerify
  }
}