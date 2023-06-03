import { takeLatest } from "redux-saga/effects";
import handleLogin, { handleRegister } from "./auth-handler";
import { authRegister, setUserInfo } from "./auth-slice";

export default function* authSaga() {
  yield takeLatest(setUserInfo().type, handleLogin);
  yield takeLatest(authRegister().type, handleRegister);
}
