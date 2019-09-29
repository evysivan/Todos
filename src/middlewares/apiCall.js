import axios from "axios";

export default function apiCall(actionType, url, method, data, params) {
  return dispatch => {
    dispatch({ type: actionType.PENDING });

    let options = {
      method,
      url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      data,
      params
    };

    axios(options)
      .then(res => {
        if (res.status === 200 && res.statusText === "OK") {
          dispatch({ type: actionType.SUCCESS, payload: { data: res.data } });
        }
      })
      .catch(error => dispatch({ type: actionType.FAILURE, error }));
  };
}
