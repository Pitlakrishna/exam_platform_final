import { Logo } from "../Logo"
import { Nav } from "../Nav"
import { Searchbar } from "../Searchbar"
import './index.scss'


export const HeaderComponent = () => {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <Logo />
                <Searchbar />
                <Nav />
            </header>
        </>
    )
}