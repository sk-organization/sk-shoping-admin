export default (initState, fnMap) => (state = initState, { type, payload }) => {
  const handler = fnMap[type]
  return handler ? handler(state, payload) : state
}
