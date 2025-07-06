import { todoItemListComponentType } from "../Types/todos.type";
import TodoItemComponent from "./todoItem.component";

const TodoItemListComponent:React.FC<todoItemListComponentType> = (props) => {
    const {todoData} = props;
    return <div>{todoData.map(item => <TodoItemComponent key={item.id} todoItem={item}/>)}</div>
}
export default TodoItemListComponent;