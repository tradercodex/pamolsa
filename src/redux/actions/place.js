import {
  GET_COUNTRY,
  GET_CITY,
  GET_COUNTRY_ERROR,
  GET_CITY_ERROR,
  GET_DEPARTMENT,
  GET_DEPARTMENT_ERROR,
  GET_PROVINCE,
  GET_PROVINCE_ERROR,
  GET_DISTRICT,
  GET_DISTRICT_ERROR,
} from "./types";
import axios from "axios";

//const root = "http://localhost:8090/api";
const root = "https://pamolsa-back.herokuapp.com/api";

export const getCountry = () => async (dispatch) => {
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

export const getDepartment = (country_id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${root}/department/list?country_id=${country_id}`
    );
    dispatch({
      type: GET_DEPARTMENT,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DEPARTMENT_ERROR,
    });
  }
};

export const getProvince = (department_id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${root}/province/list?department_id=${department_id}`
    );
    dispatch({
      type: GET_PROVINCE,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROVINCE_ERROR,
    });
  }
};

export const getDistrict = (province_id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${root}/district/list?province_id=${province_id}`
    );
    dispatch({
      type: GET_DISTRICT,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DISTRICT_ERROR,
    });
  }
};
