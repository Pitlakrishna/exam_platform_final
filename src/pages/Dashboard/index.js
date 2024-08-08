import { HeaderComponent } from "../../components/Header"
import { ListofExams } from "../../components/ListofExams"
import { Sidebar } from "../../components/Sidebar"
import './index.scss'

export const Dashboard = () => {
    return(
        <div className="" id="main">
            <HeaderComponent/>
            <Sidebar/>
            <ListofExams/>
        </div>
    )
}