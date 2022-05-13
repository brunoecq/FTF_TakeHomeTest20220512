import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.data.pending;

const getData = (state: AppState) => state.data.data;

const getError = (state: AppState) => state.data.error;

export const getDataSelector = createSelector(getData, (data) => data);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
