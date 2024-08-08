import { useNavigate } from 'react-router-dom';
import './index.scss'
export const Login = ({onSignupClick}) => {
    const navigate = useNavigate();

    const onLoginSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }
    return(
        <div className='login'>
            <form className='' onSubmit={onLoginSubmit}>
                <h1 className='mb-5 text-center' style={{color:"#1A9CD0"}}>Login</h1>
                <div className='mb-4 input-field'>
                    {/* <label className = "form-label">Username</label> */}
                   <input type = "text" name = "username" className='form-control' placeholder='Username' required />
                </div>
                <div className='mb-4 input-field'>
                     {/* <label className = "form-label">Password</label> */}
                     <input type = "password" name = "password" className='form-control' placeholder='Password' required />
                 </div>
                 <div className = "mb-3 input-field d-flex justify-content-between">
                     <span className='d-flex gap-2'>
                         <input type= "checkbox"/>
                        <span>Remember me</span>
                    </span>
                     <span>
                         <span>Forgot password?</span>
                     </span>
                 </div>
                 <div className = "mb-3 text-center input-field">
                     <button type = "submit" className = "btn login-button mb-4 col-sm-12 col-12">Login</button>
                     <p className='mt-2'>Don't have an account? <span onClick={() => onSignupClick()}>Register</span></p>
                 </div>
             </form>
        </div>
    )
}