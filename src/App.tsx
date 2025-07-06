import router from "./Router/router";
import { RouterProvider } from "react-router-dom";
import {Provider} from 'react-redux';
import { todoAppStore } from "./Store/todoApp.store";

const App:React.FC<{}> = () => {
    return <Provider store={todoAppStore}>
        <RouterProvider router={router}/>
    </Provider> 
}

export default App;