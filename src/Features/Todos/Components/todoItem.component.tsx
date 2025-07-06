import { todoItemComponentType } from "../Types/todos.type";

const TodoItemComponent:React.FC<todoItemComponentType> = (props) => {
    const {name, isCompleted} = props.todoItem;
    return <div>
        {name} {isCompleted}
    </div>
}

export default TodoItemComponent;