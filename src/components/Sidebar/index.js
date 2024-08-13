

import { FaWpforms } from "react-icons/fa";
// import { GoChevronDown } from "react-icons/go";
import './index.scss'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoPerson } from "react-icons/io5";


export const Sidebar = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState("");

    useEffect(() => {
        const getImage = async () => {
            let valueEmail = JSON.parse(localStorage.getItem("email"))
            const url = `https://profile-backend-4.onrender.com/exam_profile/image/${valueEmail}`
            console.log(url)
            const res = await axios.get(url);
            setUrl(res.data.profile.url);
        }
        getImage();
    }, [url])


    return (
        <aside id="sidebar" className="sidebar">
            <div className="logo-img d-flex flex-column align-items-center mb-3">
                {url && <img src={url} alt="img"/>}
                {!url && <IoPerson className="fs-1"/>}
                <h5 className="mt-3">Hello Eswararao</h5>
            </div>
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item" onClick={() => navigate("/dashboard")}>
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">Dashboard</span>
                    </span>
                </li>
                {/* <li className="nav-item" onClick={() => navigate("/dashboard/personal-details")}>
                    <span className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                        <FaWpforms className="i" />
                        <span className="">Profile</span>
                    </span>
                </li> */}

                {/* <a style={{ color: "black", textDecoration: "none" }} href="https://profile-frontend-nine.vercel.app/" className="nav-item">
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">User Profile</span>
                    </span>
                </a> */}

                <a style={{ color: "black", textDecoration: "none" }} onClick={() => navigate("/profile")} className="nav-item">
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">User Profile</span>
                    </span>
                </a>


                <li className="nav-item" >
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">Results</span>
                    </span>
                </li>

                <li className="nav-item">
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">Practice</span>
                    </span>
                </li>

                <li className="nav-item">
                    <span className="nav-link collapsed">
                        <FaWpforms className="i" />
                        <span className="">Invite Friends</span>
                    </span>
                </li>
            </ul>
        </aside>
    )
}