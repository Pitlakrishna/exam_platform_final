import { IoPerson } from "react-icons/io5"
import './index.scss'
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export const NavProfile = () => {
    const navigate = useNavigate()

    const onClickLogout =()=>{
        const storedEmail = JSON.parse(localStorage.getItem('email'))
        localStorage.removeItem("email")
        localStorage.removeItem(storedEmail)
        navigate("/")
    }


    return (
        <li className="d-flex align-items-center nav-profile" onClick={() => onClickLogout()} >
            {/* <IoPerson /> */}
            <IoMdExit />
        </li>
    )
}