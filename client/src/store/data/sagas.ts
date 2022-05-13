import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchDataFailure, fetchDataSuccess } from "./actions";
import { FETCH_DATA_REQUEST } from "../../types/actionTypes";
import { IData } from "../../types";

interface ServerResponse {
  data: IData[];
}

const getData = () =>
  axios.get<ServerResponse>(
    `${process.env.URL || 'http://localhost:4000'}/commits`,
  );

function* fetchDataSaga(): any {
  try {
    const response = yield call(getData);
    yield put(
      fetchDataSuccess({
        data: response.data
      })
    );
  } catch (e: any) {
    yield put(
      fetchDataFailure({
        error: e.response.data ?? e.message
      })
    );
  }
}

function* listSaga() {
  yield all([takeLatest(FETCH_DATA_REQUEST, fetchDataSaga)]);
}

export default listSaga;
