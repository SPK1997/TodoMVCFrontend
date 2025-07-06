import {signupPageType } from "../Types/auth.type";
import FormComponent from "../Components/form.component";
import { appUseSelector } from "../../../Store/todoApp.store";

const SignupPage:React.FC<signupPageType> = () => {
    const authDetails = appUseSelector(state => state.auth);
    return <FormComponent
        title="Signup | Todo MVC App"
        buttonLabel="Signup"
        onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            alert(`username is ${authDetails.email} and password is ${authDetails.password}`);
        }}
        isLogin={false}
        authDetails={authDetails}
    />
}

export default SignupPage;