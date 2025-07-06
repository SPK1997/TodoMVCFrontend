import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  todoSliceStateType,
  todoSliceUpdateIsCompletedType,
  todoSliceUpdateNameType,
} from "../Types/todos.type";

const initialState: todoSliceStateType[] = [
  {
    id: "101",
    name: "Go for walk",
    isCompleted: false,
  },
  {
    id: "102",
    name: "Bring Milk",
    isCompleted: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodoItem: (state, action: PayloadAction<todoSliceStateType>) => {
      let newState = [...state];
      newState.push({
        ...state,
        ...action.payload,
      });
      return newState;
    },
    updateCompletedStatusTodoItem: (
      state,
      action: PayloadAction<todoSliceUpdateIsCompletedType>
    ) => {
      let newState: todoSliceStateType[] = [];
      for (let item of state) {
        if (item.id === action.payload.id) {
          newState.push({ ...item, isCompleted: action.payload.isCompleted });
        } else {
          newState.push({ ...item });
        }
      }
      return newState;
    },
    updateNameTodoItem: (
      state,
      action: PayloadAction<todoSliceUpdateNameType>
    ) => {
      let newState: todoSliceStateType[] = [];
      for (let item of state) {
        if (item.id === action.payload.id) {
          newState.push({ ...item, name: action.payload.name });
        } else {
          newState.push({ ...item });
        }
      }
      return newState;
    },
  },
});

export const {
  addTodoItem,
  updateCompletedStatusTodoItem,
  updateNameTodoItem,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
