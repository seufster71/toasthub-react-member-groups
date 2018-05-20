export default function groupReducer(state = {}, action) {
  let myState = {};
  switch(action.type) {
    case 'LOAD_INIT_GROUP': {
      if (action.responseJson != null && action.responseJson.params != null) {
        if (state.appTexts != null) {
          myState = Object.assign({}, state);
        } else {
          myState.appTexts = {};
        }
        if (action.responseJson.params.appPageTexts.GROUP_PAGE != null) {
          myState.appTexts.GROUP_PAGE = action.responseJson.params.appPageTexts.GROUP_PAGE;
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
