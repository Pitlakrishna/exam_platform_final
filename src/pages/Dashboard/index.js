import { Route, Routes } from "react-router-dom"
import { HeaderComponent } from "../../components/Header"
import { ListofExams } from "../../components/ListofExams"
import { Sidebar } from "../../components/Sidebar"
import './index.scss'
import Profile from "../../components/Profile"

export const Dashboard = () => {
    return (
        <div className="" id="main">
            <HeaderComponent />
            <Sidebar />
            <Routes>
                <Route path="/" element={<ListofExams />} />
                <Route path="/personal-details" element={<Profile />} />
            </Routes>
        </div>
    )
}