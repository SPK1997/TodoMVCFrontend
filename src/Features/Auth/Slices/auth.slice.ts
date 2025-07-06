import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authSliceActionType } from "../Types/auth.type";

const initialState: authSliceActionType = {
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<authSliceActionType>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
