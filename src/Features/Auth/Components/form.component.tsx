import { formComponentType } from "../Types/auth.type";
import '../Styles/form.component.css';
import { Link } from "react-router-dom";
import { appUseDispatch } from "../../../Store/todoApp.store";
import { updateAuth } from "../Slices/auth.slice";

const FormComponent:React.FC<formComponentType> = (props) => {
const {title, buttonLabel, onSubmit, isLogin, authDetails} = props; 
const loginDescription = <div>If you are not a member please <Link to="/signup">sign up</Link></div>;
const signupDescription = <div>If you are not a member please <Link to="/signup">sign up</Link></div>;
const dispatch = appUseDispatch();

 return <form className="auth-form-component" onSubmit={onSubmit}>
    <div className="title">{title}</div>
    <label htmlFor="">Email:</label>
    <div>
        <input name="email" type="email" value={authDetails.email} onChange={e => {
            dispatch(updateAuth({
                ...authDetails,
                email: e.currentTarget.value
            }));
        }}/>
    </div>

    <label htmlFor="">Password:</label>
    <div>
        <input name="password" type="password" value={authDetails.password} onChange={e => {
            dispatch(updateAuth({
                ...authDetails,
                password: e.currentTarget.value
            }));
        }}/>
    </div>
    <button>{buttonLabel}</button>
    <div>
        {isLogin ? loginDescription : signupDescription}
    </div>
 </form>   
}

export default FormComponent;