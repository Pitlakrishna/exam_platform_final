
import './index.scss'
export const Register = ({onLoginClick}) => {
    const onRegisterationSubmit = () => {
        onLoginClick()
    }
    return(
        <form onSubmit={onRegisterationSubmit}>
                 <h1 className='mb-5 text-center' style={{color:"#1A9CD0"}}>Register</h1>
                 <div className='mb-4 input-field'>
                    {/* <label className = "form-label">Email</label> */}
                    <input type = "text" name = "username" className='form-control' placeholder='Email' required />
                </div>
                <div className='mb-4 input-field'>
                     {/* <label className = "form-label">Password</label> */}
                     <input type = "password" name = "password" className='form-control' placeholder='Password' required />
                 </div>
                 <div className='mb-4 input-field'>
                     {/* <label className = "form-label">Confirm Password</label> */}
                     <input type = "password" name = "password" className='form-control' placeholder='Confirm Password' required />
                 </div>
                 <div className = "mb-3 text-center input-field">
                     <button type = "submit" className = "btn login-button mb-3 col-sm-12 col-12">Register</button>
                     <p className='mt-3'>Already have an account? <span onClick={() => onLoginClick()}>Login</span></p>
                 </div>
             </form>
    )
}