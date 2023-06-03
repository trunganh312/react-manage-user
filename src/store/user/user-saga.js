import { takeLatest } from "redux-saga/effects";
import handleGetListUser from "./user-handler";
import { getListUser } from "./userSlice";

export function* userSaga() {
  yield takeLatest(getListUser().type, handleGetListUser);
}
