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
