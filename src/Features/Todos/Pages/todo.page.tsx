import { todoPageType } from "../Types/todos.type";
import '../Styles/todo.page.css';
import TodoItemListComponent from "../Components/todoItemList.component";

const TodoPage:React.FC<todoPageType> = () => {
    const todoData = [
        {   
            id: '101',
            name: 'Go for walk',
            isCompleted: false
        },
        {
            id: '102',
            name: 'Bring Milk',
            isCompleted: false
        }
    ]
    return <form className="todo-page-component">
        <div className="title">TODOS</div>
        <div>
            <button></button>
            <input type="text" name="todoTask" />
        </div>
        <TodoItemListComponent todoData={todoData}/>
    </form>
}

export default TodoPage;