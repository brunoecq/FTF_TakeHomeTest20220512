import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../../types/actionTypes";

import { DataActions, DataState } from "../../types";

const initialState: DataState = {
  pending: false,
  data: [],
  error: null
};

export default (state = initialState, action: DataActions) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        pending: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        pending: false,
        data: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
