export type todoPageType = {};
type todoItemType = {
  id: string;
  name: string;
  isCompleted: boolean;
};
export type todoItemComponentType = {
  todoItem: todoItemType;
};
export type todoItemListComponentType = {
  todoData: todoItemType[];
};
export type todoSliceStateType = {
  id: string;
  name: string;
  isCompleted: boolean;
};
export type todoSliceUpdateIsCompletedType = {
  id: string;
  name?: string;
  isCompleted: boolean;
};

export type todoSliceUpdateNameType = {
  id: string;
  name: string;
  isCompleted?: boolean;
};
