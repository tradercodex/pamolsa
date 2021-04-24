import { UPDATE_PASSWORD, UPDATE_PASSWORD_ERROR } from "./types";
import axios from "axios";

const root = "https://wspamolsa.com.pe/api";
//const root = "http://localhost:8090/api";

const token = localStorage.getItem("token");

let config = {
  headers: {
    "x-access-token": token,
  },
};

export const updatePassword = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${root}/mail/save`, data, config);
    dispatch({
      type: UPDATE_PASSWORD,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_ERROR,
    });
  }
};
