
import { CiPhone } from 'react-icons/ci'
import './index.scss'
import { Login } from '../Login'
import { useState } from 'react'
import { Register } from '../Register'
import { FaArrowLeft } from "react-icons/fa";

export const MainPage = () => {
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
        <div className="main-page">
            <header className='navbar-container d-flex align-items-center justify-content-between'>
                <div className=''>
                    <img src='/images/WE-HIRE.png' alt='logo'/>
                </div>
                <div className='nav-items d-flex align-items-center'>
                    <span style={{color:'rgba(204, 202, 202, 0.6)', fontWeight:"900"}}><CiPhone/> Need Help? <span style={{color:'rgba(204, 202, 202, 0.6)', fontWeight:"900"}}>Call an expert - 8688424915</span></span>
                </div>
            </header>
            <div className='login-signup-buttons-container d-flex justify-content-center align-items-center'>
                <div className={isHome ? 'login-signup mt-5 col-12 col-sm-12 col-md-7 col-lg-6 col-xl-5 p-5 position-relative' : 'login-signup mt-5 col-12 col-sm-12 col-md-7 col-lg-6 col-xl-4 p-5 position-relative'}>
                    {isHome && <>
                        <h3 style={{color:"#F37021"}}>India's Structured Freshers</h3>
                        <h5 style={{color:"#F37021"}}>Online Test series platform</h5>
                        <small className='mt-5' style={{color:"#1A9CD0"}}>Mock Test: 100% FREE, Practice Onllne Test Serles</small>
                        <div className='container d-flex justify-content-center gap-3 mt-5'>
                            <div className='d-flex flex-column align-items-center justify-content-center gap-3' onClick={onLoginClick}>
                                <img src='/images/wehire-login.png' alt='login'/>
                                <h5 className='fw-bold'>Login</h5>
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center gap-3' onClick={onSignupClick}>
                                <img src='/images/wehire-rge.png' alt='login'/>
                                <h5 className='fw-bold'>Signup</h5>
                            </div>
                        </div>
                        <p className='text-center mt-5' style={{color:"#4d4d4d"}}>Support by Excellence <span>Domain Experts</span></p>
                    </>}
                    {!isHome && <>
                        {isLogin && <Login onSignupClick = {onSignupClick}/>}
                        {!isLogin && <Register onLoginClick = {onLoginClick}/>}
                        {/* <div className='text-center'>
                            <button className='btn btn-primary col-xl-12 col-12' onClick={() => setIsHome(true)}>Back</button>
                        </div> */}
                        <span className='position-absolute top-0 mt-3 fs-5' onClick={() => setIsHome(true)}><FaArrowLeft/></span>

                    </>}
                </div>
            </div>
            {/* <ul className='d-flex gap-3 text-primary text-center' style={{marginTop:"120px"}}>
                <li>Terms of Service</li>
                <li>Privacy policy</li>
                <li>Insurance Licenses</li>
            </ul> */}
            <div className='text-center mt-5 fs-5' style={{color:"#bbbbc0"}}>
                <span>Copyright ©️ 2024 All Rights Reserved by Orbysol Systems Pvt.Ltd.</span>
            </div>
        </div>
    )
}