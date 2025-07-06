import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../Features/Auth/Slices/auth.slice";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { todoReducer } from "../Features/Todos/Slices/todo.slice";
const todoAppStore = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
});

const appUseSelector: TypedUseSelectorHook<
  ReturnType<typeof todoAppStore.getState>
> = useSelector;

const appUseDispatch = useDispatch<typeof todoAppStore.dispatch>;

export { appUseSelector, appUseDispatch, todoAppStore };
