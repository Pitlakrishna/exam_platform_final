import { CiPhone } from 'react-icons/ci'
import './index.scss'
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Login } from '../Login';
import { Register } from '../Register';
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);
    const [isHome, setIsHome] = useState(true);

    const onLoginClick = () => {
        setIsLogin(true);
        setIsHome(false);
    }

    const onSignupClick = () => {
        setIsLogin(false);
        setIsHome(false);
    }

    return (
        <div className='home-page-container'>
            <header className='header-container d-flex align-items-center justify-content-between gap-4'>
                <div className='logo' onClick={() => navigate("/")}>
                    <img src='/images/WE-HIRE.png' alt='logo' className='logo-img' />
                </div>
                <div className='header-nav'>
                    <span style={{ color: '#636363' }}><CiPhone /> Need Help? <span>Call an expert - 8688424915</span></span>
                </div>
            </header>
            <div className='home-body-container'  >
                <div className={isHome ? 'col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 home-body position-relative' : 'col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 home-body position-relative'}>
                    {
                        isHome && <>
                            <h3 className='fw-bolder' style={{ color: "#F37021" }}>India's Structured Freshers</h3>
                            <h5 className='fw-bolder' style={{ color: "#F37021" }}>Online Test series platform</h5>
                            <p className='mt-3 fw-bold' style={{ color: "#1A9CD0" }}>Mock Test: 100% FREE, Practice Online Test Series</p>
                            <div className='login-signup-container mt-5'>
                                <div className='login-card d-flex flex-column align-items-center justify-content-center gap-3' onClick={onLoginClick}>
                                    <img src='/images/wehire-login.png' alt='login' />
                                    <h5 className='fw-bold'>Login</h5>
                                </div>
                                <div className='login-card d-flex flex-column align-items-center justify-content-center gap-3' onClick={onSignupClick}>
                                    <img src='/images/wehire-rge.png' alt='login' />
                                    <h5 className='fw-bold'>Signup</h5>
                                </div>
                            </div>
                            <p className='text-center mt-5 support-p' style={{ color: "#4d4d4d" }}>Support by Excellence <span>Domain Experts</span></p>
                        </>
                    }
                    {!isHome && <>
                        {isLogin && <Login onSignupClick={onSignupClick} />}
                        {!isLogin && <Register onLoginClick={onLoginClick} />}

                        <span className='back-icon position-absolute top-0 mt-5 mx-4 fs-5' onClick={() => setIsHome(true)}><FaArrowLeft /></span>

                    </>}
                </div>
            </div>
            <div className='d-flex flex-column text-center p-3 mt-3 ' style={{ color: "#636363",fontSize:"14px", }}>
                <span>Copyright ©️ 2024 All Rights Reserved by Orbysol Systems Pvt.Ltd.</span>
                {/* <p className='mt-3 fw-bold' style={{color:"white", fontSize:"20px"}}>Powered by Save Bharat</p> */}
            </div>
        </div>
    )
}