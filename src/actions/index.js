// actions.js
import axios from 'axios';
import apiConfig from '../api/config';
export const SET_WAYBILL_DATA = 'SET_WAYBILL_DATA';
export const getWaybill = () => (dispatch) => {
  axios
    .get(apiConfig.baseUrl + 'waybill')
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_WAYBILL_DATA,
          data: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
