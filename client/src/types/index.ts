import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from "./actionTypes";
  
  export interface IData {
    sha: string;
    html_url: string;
    commit: {
      committer: {
        date: string;
      };
      message: string;
      author: {
        name: string;
      };
    };
    author: {
      name: string;
      avatar_url: string;
    };
  }
  
  export interface DataState {
    pending: boolean;
    data: IData[];
    error: string | null;
  }
  
  export interface FetchDataSuccessPayload {
    data: IData[];
  }
  
  export interface FetchDataFailurePayload {
    error: string;
  }
  
  export interface FetchDataRequest {
    type: typeof FETCH_DATA_REQUEST;
  }
  
  export type FetchDataSuccess = {
    type: typeof FETCH_DATA_SUCCESS;
    payload: FetchDataSuccessPayload;
  };
  
  export type FetchDataFailure = {
    type: typeof FETCH_DATA_FAILURE;
    payload: FetchDataFailurePayload;
  };
  
  export type DataActions =
    | FetchDataRequest
    | FetchDataSuccess
    | FetchDataFailure;
  