import { IoPerson } from "react-icons/io5"
import './index.scss'
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export const NavProfile = () => {
    const navigate = useNavigate()
    return (
        <li className="d-flex align-items-center nav-profile" onClick={() => navigate("/")} >
            {/* <IoPerson /> */}
            <IoMdExit />
        </li>
    )
}