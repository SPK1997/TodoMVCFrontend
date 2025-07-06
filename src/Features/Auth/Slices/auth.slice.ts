import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authSliceStateType } from "../Types/auth.type";

const initialState: authSliceStateType = {
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<authSliceStateType>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
