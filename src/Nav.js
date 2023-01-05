import './Nav.css';
import logo from "./Logo.svg";

export const Nav = () => {
    return (
        <nav className="navigation">
            <img src={logo} alt="logo" className="logo"/>
            <ul className="navLinks">
                <li><a href={'#'}>Home</a></li>
                <li><a href={'#'}>About</a></li>
                <li><a href={'#'}>Menu</a></li>
                <li><a href={'#'}>Reservations</a></li>
                <li><a href={'#'}>Order online</a></li>
                <li><a href={'#'}>Login</a></li>
            </ul>
        </nav>
    );
}