import logo from "../images/logo_dolphin.png";
import Menu from "./Menu";
import SocialIcons from "./SocialIcons";

const Header = () => {
    return (
        <header className="py-2 bg-dark sticky-top">
            <div className="container d-flex justify-content-between align-items-center">
                <img src={logo} alt="logo" width="50px" />
                <Menu />
                <SocialIcons />
            </div>
        </header>
    )
}

export default Header;