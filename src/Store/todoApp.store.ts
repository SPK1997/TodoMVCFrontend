import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../Features/Auth/Slices/auth.slice";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
const todoAppStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const appUseSelector: TypedUseSelectorHook<
  ReturnType<typeof todoAppStore.getState>
> = useSelector;

const appUseDispatch = useDispatch<typeof todoAppStore.dispatch>;

export { appUseSelector, appUseDispatch, todoAppStore };
