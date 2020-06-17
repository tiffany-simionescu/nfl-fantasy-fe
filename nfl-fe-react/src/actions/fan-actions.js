import axios from 'axios';

export const POST_INITIALIZE = "POST_INITIALIZE";

export const ADD_FAN_SUCCESS = "ADD_FAN_SUCCESS";
export const ADD_FAN_FAILURE = "ADD_USER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

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

export const login = (fan, props) => dispatch => {
  dispatch({ type: LOGIN_START });

  axios
    .post('https://tacklemytrade-api.herokuapp.com/api/fans/login', fan)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.fan
      });
      localStorage.setItem("fan-token", res.data.authToken);
      props.history.push('/dashboard');
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { err, message: err.message }
      });
      console.error(err);
    })
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
}