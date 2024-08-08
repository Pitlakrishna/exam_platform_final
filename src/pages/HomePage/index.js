import { CiPhone } from 'react-icons/ci'
import './index.scss'
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Login } from '../Login';
import { Register } from '../Register';


export const HomePage = () => {

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

    return(
        <div className='home-page-container'>
            <header className='header-container d-flex align-items-center justify-content-between gap-4'>
                <div className='logo'>
                    <img src='/images/WE-HIRE.png' alt='logo' className='logo-img'/>
                </div>
                <div className='header-nav'>
                    <span style={{color:'rgba(204, 202, 202, 0.6)', fontWeight:"900"}}><CiPhone/> Need Help? <span>Call an expert - 8688424915</span></span>
                </div>
            </header>
            <div className='home-body-container'>
                <div className={isHome ? 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 home-body position-relative' : 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 home-body position-relative'}>
                    {
                        isHome && <>
                            <h3 style={{color:"#F37021"}}>India's Structured Freshers</h3>
                            <h5 style={{color:"#F37021"}}>Online Test series platform</h5>
                            <p className='mt-3' style={{color:"#1A9CD0"}}>Mock Test: 100% FREE, Practice Onllne Test Serles</p>
                            <div className='login-signup-container mt-5'>
                                <div className='login-card d-flex flex-column align-items-center justify-content-center gap-3' onClick={onLoginClick}>
                                    <img src='/images/wehire-login.png' alt='login'/>
                                    <h5 className='fw-bold'>Login</h5>
                                </div>
                                <div className='login-card d-flex flex-column align-items-center justify-content-center gap-3' onClick={onSignupClick}>
                                    <img src='/images/wehire-rge.png' alt='login'/>
                                    <h5 className='fw-bold'>Signup</h5>
                                </div>
                            </div>
                            <p className='text-center mt-5 support-p' style={{color:"#4d4d4d"}}>Support by Excellence <span>Domain Experts</span></p>
                        </>
                    }
                    {!isHome && <>
                        {isLogin && <Login onSignupClick = {onSignupClick}/>}
                        {!isLogin && <Register onLoginClick = {onLoginClick}/>}
                        
                        <span className='position-absolute top-0 mt-5 mx-4 fs-5' onClick={() => setIsHome(true)}><FaArrowLeft/></span>

                    </>}
                </div>
            </div>
            <div className='text-center mt-5 p-3' style={{color:"#bbbbc0"}}>
                <span>Copyright ©️ 2024 All Rights Reserved by Orbysol Systems Pvt.Ltd.</span>
            </div>
        </div>
    )
}