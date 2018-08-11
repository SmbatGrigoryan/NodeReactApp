import axios from 'axios';
import {FETCH_USER, FETCH_SURVEYS} from './types'

export const fetchUser = () => {
   return async (dispatch) => {
     const res = await axios.get('/api/current_user');

       dispatch({
           type: FETCH_USER,
           payload: res.data
       });
    }
};

export const handleToken = (token) => {
  return async (dispatch) => {
    const res = await axios.post('/api/strip', token);

    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  }
};


export const submitSurvey = (values, history) => {
  return async (dispatch) => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');

    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  }
};

export const fetchSurveys = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/surveys');

    dispatch({type: FETCH_SURVEYS, payload: res.data});
  }
};