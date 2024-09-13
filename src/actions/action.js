import {
  REQUEST_TABLE_DATA,
  TABLE_DATA_SUCCESS,
  TABLE_DATA_FAILURE,
} from "../constant/constant";

import axios from "axios";

export const fetchDataRequest = () => ({
  type: REQUEST_TABLE_DATA,
});

export const fetchDataSuccess = (data) => ({
  type: TABLE_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: TABLE_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://api.sampleapis.com/countries/countries")
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
