import { loginPageType } from "../Types/auth.type";
import FormComponent from "../Components/form.component";
import { appUseSelector } from "../../../Store/todoApp.store";

const LoginPage:React.FC<loginPageType> = () => {
    const authDetails = appUseSelector(state => state.auth);
    return <FormComponent
        title="Login | Todo MVC App"
        buttonLabel="Login"
        onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            alert(`username is ${authDetails.email} and password is ${authDetails.password}`);
        }}
        isLogin={true}
        authDetails={authDetails}
    />
}

export default LoginPage;