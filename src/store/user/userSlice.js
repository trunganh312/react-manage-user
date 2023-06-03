import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  listUser: [],
  pageCount: 0,
  page: 1,
  filter: "",
  showEdit: false,
  currentUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setShow: (state, action) => ({
      ...state,
      show: action.payload,
    }),
    setShowEdit: (state, action) => ({
      ...state,
      showEdit: action.payload,
    }),
    setCurrentUser: (state, action) => ({
      ...state,
      currentUser: action.payload,
    }),
    getListUser() {},
    setListUser: (state, action) => ({
      ...state,
      listUser: action.payload,
    }),
    setPageCount: (state, action) => ({
      ...state,
      pageCount: action.payload,
    }),
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    setFilter: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});

export const {
  setShow,
  setListUser,
  setPageCount,
  setShowEdit,
  setPage,
  setFilter,
  getListUser,
  setCurrentUser,
} = userSlice.actions;
export default userSlice.reducer;
