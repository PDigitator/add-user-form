import { createSlice } from "@reduxjs/toolkit";
import { api } from "./operations";

const usersSlice = createSlice({
  name: "users",
  initialState: { items: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.getUsers.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(api.endpoints.getUsers.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addMatcher(api.endpoints.getUsers.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(api.endpoints.createUser.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(api.endpoints.createUser.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addMatcher(api.endpoints.createUser.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
