import axios from "axios";

const authApi = {
  login(data) {
    return axios.post("https://api.ezfrontend.com/auth/local", data);
  },

  register(data) {
    return axios.post("https://api.ezfrontend.com/auth/local/register", data);
  },
};

export default authApi;
