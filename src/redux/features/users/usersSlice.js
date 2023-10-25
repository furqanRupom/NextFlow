import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "rupom",
  email: "furqanrupom978@gmail.com",
  password: "abcde12345",
};



const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});

export const { matchedTasks } = usersSlice.actions;

export default usersSlice.reducer;
