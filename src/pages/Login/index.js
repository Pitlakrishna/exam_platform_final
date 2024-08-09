import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { Toast, ToastContainer, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'; 

export const Login = ({ onSignupClick }) => {
    const navigate = useNavigate();
    const { dispatch, error } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [showToast, setShowToast] = useState(false);

    const onHandleInput = (e) => {
        setCredentials((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const onLoginSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "login_start" });

        try {
            const res = await axios.post("http://localhost:8080/login", credentials);
            dispatch({ type: "login_success", payload: res.data });
            navigate("/dashboard");
        } catch (error) {
            const errorMessage = error.response?.data || "An unexpected error occurred";
            dispatch({ type: "login-failure", payload: errorMessage });
            setShowToast(true);
        }
    };

    return (
        <div className='login'>
            <form onSubmit={onLoginSubmit}>
                <h1 className='mb-5 text-center' style={{ color: "#1A9CD0" }}>Login</h1>
                <div className='mb-4 input-field'>
                    <input type="email" name="email" className='form-control' placeholder='Email' required onChange={onHandleInput} />
                </div>
                <div className='mb-4 input-field'>
                    <input type="password" name="password" className='form-control' placeholder='Password' required onChange={onHandleInput} />
                </div>
                <div className="mb-3 input-field d-flex justify-content-between">
                    <span className='d-flex gap-2'>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </span>
                    <span>
                        <span>Forgot password?</span>
                    </span>
                </div>
                <div className="mb-3 text-center input-field">
                    <button type="submit" className="btn login-button mb-4 col-sm-12 col-12">Login</button>
                    <p className='mt-2'>Don't have an account? <span className='fw-bolder' onClick={() => onSignupClick()}>Register</span></p>
                </div>
            </form>

            <ToastContainer className="p-3 position-fixed top-0 end-0 m-3">
                <Toast show={showToast} onClose={() => setShowToast(false)} className="text-bg-danger border-0">
                    <div className="d-flex align-items-center">
                        <Toast.Body>
                            {error}
                        </Toast.Body>
                        <Button type="button" className="btn-close btn-close-white ms-auto m-2" aria-label="Close" onClick={() => setShowToast(false)}></Button>
                    </div>
                </Toast>
            </ToastContainer>
        </div>
    );
};
