import axios from 'axios';
import {FETCH_USER} from './types'

export const fetchUser = () => {
   return async (dispatch) => {
     const res = await axios.get('/api/current_user');
                console.log('res.data despatch---->', res.data)
                console.log('res.data despatch---->', res.data.displayName)
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