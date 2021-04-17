import {
  GET_COUNTRY,
  GET_CITY,
  GET_COUNTRY_ERROR,
  GET_CITY_ERROR,
} from "./types";
import axios from "axios";

//const root = "https://wspamolsa.com.pe/api";
const root = "https://wspamolsa.com.pe/api";

export const geCountry = () => async (dispatch) => {
  try {
    const res = await axios.get(`${root}/country/list`);
    dispatch({
      type: GET_COUNTRY,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COUNTRY_ERROR,
    });
  }
};

export const getCity = (country_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${root}/city/list?country_id=${country_id}`);
    dispatch({
      type: GET_CITY,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CITY_ERROR,
    });
  }
};
