import axios from 'axios';

export const POST_INITIALIZE = "POST_INITIALIZE";
export const ADD_FAN_SUCCESS = "ADD_FAN_SUCCESS";
export const ADD_FAN_FAILURE = "ADD_USER_FAILURE";

export const registerFan = (fan, props) => dispatch => {
  dispatch({ type: POST_INITIALIZE });

  axios
    .post('https://tacklemytrade-api.herokuapp.com/api/fans/register', fan)
    .then(res => {
      dispatch({
        type: ADD_FAN_SUCCESS,
        payload: res.data
      });
      props.history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: ADD_FAN_FAILURE,
        payload: { err, message: err.message }
      });
      console.error(err.message);
      props.history.push("/login");
    });
};