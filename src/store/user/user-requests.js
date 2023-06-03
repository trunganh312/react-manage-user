import { userApi } from "../../service/userApi";

export default function requestGetListUser(page = 1) {
  return userApi.getAll(page);
}
