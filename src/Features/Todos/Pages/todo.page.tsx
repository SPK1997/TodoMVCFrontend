import { todoPageType } from "../Types/todos.type";
import '../Styles/todo.page.css';
import TodoItemListComponent from "../Components/todoItemList.component";
import { appUseDispatch, appUseSelector } from "../../../Store/todoApp.store";
import { addTodoItem } from "../Slices/todo.slice";

const TodoPage:React.FC<todoPageType> = () => {
    const todoData = appUseSelector(state => state.todo);
    const dispatch = appUseDispatch();
    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            if(e.currentTarget.value.trim()) {
                dispatch(addTodoItem({
                    id: String(Date.now()),
                    name: e.currentTarget.value,
                    isCompleted: false
                }));
            }
            (e.currentTarget.form as HTMLFormElement).reset();
        }
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return <form className="todo-page-component" onSubmit={onSubmit}>
        <div className="title">TODOS</div>
        <div>
            <span></span>
            <input type="text" name="todoTask" onKeyDown={onKeyDown}/>
        </div>
        <TodoItemListComponent todoData={todoData}/>
    </form>
}

export default TodoPage;