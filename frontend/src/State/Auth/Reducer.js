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

  // ✅ equipment
  EQUIPMENT_CREATE_REQUEST,
  EQUIPMENT_CREATE_SUCCESS,
  EQUIPMENT_CREATE_FAILURE,
  FETCH_EQUIPMENTS_REQUEST,
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_FAILURE,
} from "./ActionType";

const initialState = {
  // ---------- AUTH ----------
  user: null,
  jwt: null,
  loading: false,
  error: null,

  // ---------- EQUIPMENTS ----------
  equipments: [],      // all equipments list
  equipment: null,     // recently created equipment
  equipmentLoading: false,
  equipmentError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---------- AUTH ----------
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case NEWPASSWORD_REQUEST:
      return { ...state, loading: true, error: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jwt: action.payload.accessToken || null,
        user: {
          fullName: action.payload.fullName,
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber,
        },
      };

    case NEWPASSWORD_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case NEWPASSWORD_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ---------- EQUIPMENT ----------
    case EQUIPMENT_CREATE_REQUEST:
      return { ...state, equipmentLoading: true, equipmentError: null };

    case EQUIPMENT_CREATE_SUCCESS:
      return {
        ...state,
        equipmentLoading: false,
        equipmentError: null,
        equipment: action.payload,
        equipments: [...state.equipments, action.payload], // append new one
      };

    case EQUIPMENT_CREATE_FAILURE:
      return { ...state, equipmentLoading: false, equipmentError: action.payload };

    case FETCH_EQUIPMENTS_REQUEST:
      return { ...state, equipmentLoading: true, equipmentError: null };

    case FETCH_EQUIPMENTS_SUCCESS:
      return {
        ...state,
        equipmentLoading: false,
        equipmentError: null,
        equipments: action.payload, // full list
      };

    case FETCH_EQUIPMENTS_FAILURE:
      return { ...state, equipmentLoading: false, equipmentError: action.payload };

    default:
      return state;
  }
};



export default authReducer;
