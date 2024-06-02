import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="w-50 d-flex justify-content-between">
            <NavLink
                className={
                    ({isActive}) => (
                    isActive
                        ? "nav-link text-white fw-bold"
                        : "nav-link text-white"
                )}
                to="/"
            >
                HOME
            </NavLink>
            <NavLink
                className={
                    ({isActive}) => (
                    isActive
                        ? "nav-link text-white fw-bold"
                        : "nav-link text-white"
                )}
                to="/gallery"
            >
                GALLERY
            </NavLink>
            <NavLink
                className={
                    ({isActive}) => (
                    isActive
                        ? "nav-link text-white fw-bold"
                        : "nav-link text-white"
                )}
                to="/about"
            >
                ABOUT
            </NavLink>
        </nav>
    );
};

export default Menu;
