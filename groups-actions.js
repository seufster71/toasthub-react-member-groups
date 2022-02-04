import callService from '../../core/api/api-call';

// action
export function loadInitGroup(responseJson) {
  return { type: "LOAD_INIT_GROUP", responseJson };
}


// thunk

export function init() {
  return function(dispatch) {
    let requestParams = {};
    requestParams.action = "INIT";
    requestParams.service = "GROUP_SVC";
    //requestParams.prefFormKeys = new Array("LOGIN_FORM","REGISTRATION_FORM","FORGOTPASSWORD_FORM","PASSWORD_CHANGE_FORM");
    requestParams.prefTextKeys = new Array("GROUP_PAGE");
    let params = {};
    params.requestParams = requestParams;
    params.URI = '/api/member/callService';

    return callService(params).then( (responseJson) => {
      dispatch(loadInitGroup(responseJson));
    }).catch(error => {
      throw(error);
    });

  };
}
