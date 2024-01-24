import { createSlice } from "@reduxjs/toolkit";

import { api } from "./operations";

const initialState = { items: [], isLoading: false, error: null };

const handlePending = (state) => {
  state.isLoading = true;
};

const handleGetUsersFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleCreateUserFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(api.endpoints.getUsers.pending, handlePending)
      .addCase(api.endpoints.getUsers.fulfilled, handleGetUsersFulfilled)
      .addCase(api.endpoints.getUsers.rejected, handleRejected)
      .addCase(api.endpoints.createUser.pending, handlePending)
      .addCase(api.endpoints.createUser.fulfilled, handleCreateUserFulfilled)
      .addCase(api.endpoints.createUser.rejected, handleRejected),
});

export const usersReducer = usersSlice.reducer;
