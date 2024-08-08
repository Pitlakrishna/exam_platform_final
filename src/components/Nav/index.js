import { NavDarkLightMode } from "../NavDarkLightMode"
import { NotificationsComponent } from "../NavNotifications"
import { NavProfile } from "../NavProfile"


export const Nav = () => {
    return(
        <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center gap-3" style={{listStyleType :"none"}}>
                <NavDarkLightMode/>
                <NotificationsComponent/>
                <NavProfile/>
            </ul>
        </nav>
    )
}