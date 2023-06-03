import { combineReducers } from "redux";
import authSlice from "./auth-thunk/auth-slice";
import userSlice from "./user/userSlice";

const reducer = combineReducers({
  users: userSlice,
  auth: authSlice,
});

export default reducer;
