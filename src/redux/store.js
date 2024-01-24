import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
import { api } from "./operations";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
