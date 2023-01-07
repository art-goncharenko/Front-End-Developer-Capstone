import './Nav.css';
import logo from "../../img/Logo.svg";
import {Link} from "react-router-dom";

export const Nav = () => {
    return (
            <nav className="navigation">
                <img src={logo} alt="logo" className="logo"/>
                <ul className="navLinks">
                    <li><Link to="/">Home</Link></li>
                    <li><a href={'#'}>About</a></li>
                    <li><a href={'#'}>Menu</a></li>
                    <li><Link to="/BookingPage">Reservations</Link></li>
                    <li><a href={'#'}>Order online</a></li>
                    <li><a href={'#'}>Login</a></li>
                </ul>
            </nav>
    );
}