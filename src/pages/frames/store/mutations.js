export const SET_DATA = (state, payload) => {
  state.frames = payload.sort(function (a, b) {
    return a.order < b.order ? -1 : 1
  })
}
