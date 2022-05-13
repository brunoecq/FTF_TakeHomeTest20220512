import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS
} from "../../types/actionTypes";
import {
  FetchDataRequest,
  FetchDataSuccess,
  FetchDataSuccessPayload,
  FetchDataFailure,
  FetchDataFailurePayload
} from "../../types";

export const fetchDataRequest = (): FetchDataRequest => ({
  type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (
  payload: FetchDataSuccessPayload
): FetchDataSuccess => ({
  type: FETCH_DATA_SUCCESS,
  payload
});

export const fetchDataFailure = (
  payload: FetchDataFailurePayload
): FetchDataFailure => ({
  type: FETCH_DATA_FAILURE,
  payload
});
