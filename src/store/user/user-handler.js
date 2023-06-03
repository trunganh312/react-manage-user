import { call, put } from "redux-saga/effects";
import requestGetListUser from "./user-requests";
import { setListUser, setPageCount } from "./userSlice";

export default function* handleGetListUser(action) {
  console.log(action);
  try {
    const response = yield call(requestGetListUser, action.payload);
    yield put(setListUser(response?.data));
    yield put(setPageCount(response.total_pages));
  } catch (error) {}
}
