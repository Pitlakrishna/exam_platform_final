import { TfiAlignJustify } from "react-icons/tfi"
import './index.scss'

export const Logo = () => {
    const handleToggleSidebar = () => {
        document.body.classList.toggle("toggle-sidebar");
    }
    return(
        <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <span className="d-none d-lg-block">
                    <img src="images/logo.png" alt="logo"/>
                </span>
            </a>
            <span onClick={handleToggleSidebar}>
                <TfiAlignJustify className="toggle-sidebar-button"/>
            </span>
        </div>
    )
}