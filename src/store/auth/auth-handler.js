import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import { requestLogin, requestRegister } from "./auth-requests";
import { setUserInfo } from "./auth-slice";

export default function* handleLogin(action) {
  try {
    const response = yield call(requestLogin, action.payload);
    console.log(response);
    yield put(setUserInfo(response.user));
  } catch (error) {
    console.log(error);
  }
}

export function* handleRegister(action) {
  try {
    const response = yield call(requestRegister, action.payload);
    console.log(response);
    yield put(setUserInfo(response.user));
  } catch (error) {
    toast.error(error.message);

    console.log(error);
  }
}
