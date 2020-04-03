export default function groupReducer(state = {}, action) {
  let myState = {};
  switch(action.type) {
    case 'LOAD_INIT_GROUP': {
      if (action.responseJson != null && action.responseJson.params != null) {
        if (state.prefTexts != null) {
          myState = Object.assign({}, state);
        } else {
          myState.prefTexts = {};
        }
        if (action.responseJson.params.prefTexts.GROUP_PAGE != null) {
          myState.prefTexts.GROUP_PAGE = action.responseJson.params.prefTexts.GROUP_PAGE;
        }
        return Object.assign({}, state, myState);
      } else {
        return state;
      }
    }
    case 'SAVE_GROUP':
      return state;
    default:
      return state;
  }
}
