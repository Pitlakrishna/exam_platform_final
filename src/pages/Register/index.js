
import { useState } from 'react'
import './index.scss'
import axios from 'axios';



export const Register = ({onLoginClick}) => {

    const [userDetails, setUserDetails] = useState({
        email : undefined,
        password : undefined,
    })

    const [confirmPassword, setConfirmPassword] = useState(undefined);

    const [passwordMatchError, setPasswordMatchError] = useState("");



    //taking the user details
    const onHandleInput = (e) => {
        setUserDetails((prev) => ({
            ...prev, [e.target.name] : e.target.value
        }))
    }

    //checking the password match
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const onRegisterationSubmit = async (e) => {
        e.preventDefault();
        // console.log(userDetails);
        // console.log(confirmPassword);
        if(userDetails.password !== confirmPassword){
            setPasswordMatchError("password doesnot match");
            return;
        }
        await axios.post("http://localhost:8080/register", userDetails);
        setPasswordMatchError("");
        onLoginClick();
    }
    return(
        <form onSubmit={onRegisterationSubmit}>
                 <h1 className='mb-5 text-center' style={{color:"#1A9CD0"}}>Register</h1>
                 <div className='mb-4 input-field'>
                    {/* <label className = "form-label">Email</label> */}
                    <input type = "email" name = "email" className='form-control' placeholder='Email' required onChange={onHandleInput} />
                </div>
                <div className='mb-4 input-field'>
                     {/* <label className = "form-label">Password</label> */}
                     <input type = "password" name = "password" className='form-control' placeholder='Password' required onChange={onHandleInput} />
                 </div>
                 <div className='mb-4 input-field'>
                     {/* <label className = "form-label">Confirm Password</label> */}
                     <input id='confirm-password' type = "password" name = "confirmPassword" className={`form-control ${passwordMatchError ? "border-danger" : ""}`} placeholder='Confirm Password' required onChange={handleConfirmPassword} />
                     {passwordMatchError && <p className='text-danger mt-1'>{passwordMatchError}</p>}
                 </div>
                 <div className = "mb-3 text-center input-field">
                     <button type = "submit" className = "btn login-button mb-3 col-sm-12 col-12">Register</button>
                     <p className='mt-3'>Already have an account? <span className='fw-bolder' onClick={() => onLoginClick()}>Login</span></p>
                 </div>
             </form>
    )
}