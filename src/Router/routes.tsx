import LoginPage from "../Features/Auth/Pages/login.page";
import SignupPage from "../Features/Auth/Pages/signup.page";
import TodoPage from "../Features/Todos/Pages/todo.page";

const routes = [
  {
    path: "/todo",
    element: <TodoPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
];

export default routes;
