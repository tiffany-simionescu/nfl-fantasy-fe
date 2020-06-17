import axios from 'axios';
import { AxiosWithAuth } from '../hooks/AxiosWithAuth';

export const POST_INITIALIZE = "POST_INITIALIZE";
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";

export const ADD_FAN_SUCCESS = "ADD_FAN_SUCCESS";
export const ADD_FAN_FAILURE = "ADD_USER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const FETCH_FAN_SUCCESS = "FETCH_FAN_SUCCESS";
export const FETCH_FAN_FAILURE = "FETCH_FAN_FAILURE";

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
  const cors ='https://cors-anywhere.herokuapp.com/';
  const url = 'https://tacklemytrade-api.herokuapp.com/api/fans/login';
  dispatch({ type: LOGIN_START });

  axios
    .post(cors + url, fan)
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

export const fetchFan = fan_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  AxiosWithAuth()
    .get(`/fans/${fan_id}`)
    .then(res => {
      dispatch({
        type: FETCH_FAN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAN_FAILURE,
        payload: { err, message: err.message }
      });
      console.error(err.message);
    });
};