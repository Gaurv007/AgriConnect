import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  NEWPASSWORD_FAILURE,
  NEWPASSWORD_REQUEST,
  NEWPASSWORD_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  EQUIPMENT_CREATE_REQUEST,
  EQUIPMENT_CREATE_SUCCESS,
  EQUIPMENT_CREATE_FAILURE,
  FETCH_EQUIPMENTS_REQUEST,
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_FAILURE,
} from "./ActionType";

import axios from "axios";

const baseUrl = "http://localhost:8080/api";

// ================== REGISTER ==================
export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post(`${baseUrl}/signup`, userData);
    const user = response.data;

    if (user.accessToken) {
      localStorage.setItem("jwt", user.accessToken);
    }

    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================== LOGIN ==================
export const login = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post(`${baseUrl}/login`, loginData);

    localStorage.setItem("jwt", data.accessToken);

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================== CREATE EQUIPMENT ==================
export const createEquipment = (equipmentData) => async (dispatch) => {
  dispatch({ type: EQUIPMENT_CREATE_REQUEST });
  try {
    const token = localStorage.getItem("jwt");
    const { data } = await axios.post(
      `http://localhost:8080/equipment/register`,
      equipmentData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: EQUIPMENT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EQUIPMENT_CREATE_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================== FETCH EQUIPMENTS ==================
export const fetchEquipments = (category) => async (dispatch) => {
  dispatch({ type: FETCH_EQUIPMENTS_REQUEST });
  try {
    const token = localStorage.getItem("jwt");
    const { data } = await axios.get(
      `http://localhost:8080/equipment/category/${category}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: FETCH_EQUIPMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_EQUIPMENTS_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};
