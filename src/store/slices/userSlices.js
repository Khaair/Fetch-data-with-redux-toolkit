import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    // action
    setUserList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
