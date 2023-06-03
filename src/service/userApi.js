import axios from "axios";
import axiosClient from "./axiosClient";

export const userApi = {
  getAll(page) {
    const url = `/users?page=${page}`;
    return axiosClient.get(url);
  },

  getSingle(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  create(data) {
    const url = "/users";
    return axiosClient.post(url, data);
  },

  update(id, data) {
    const url = `/users/${id}`;
    return axiosClient.put(url, data);
  },

  delete(id) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
};
