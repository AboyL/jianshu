const defaultState = {
  headerSearch: ''
}
export default (state = defaultState, actions) => {
  if(actions.type==='set_header_search'){
    return {headerSearch:actions.value}
  }
  return state
}