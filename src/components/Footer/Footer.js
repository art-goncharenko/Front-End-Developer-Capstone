import './Footer.css';
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <nav className="footerNav">
                <div className="footerDoormatNav">
                    <h3 className="footerTitle">Doormat navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href={'#'}>About</a></li>
                        <li><a href={'#'}>Menu</a></li>
                        <li><Link to="/BookingPage">Reservations</Link></li>
                        <li><a href={'#'}>Order online</a></li>
                        <li><a href={'#'}>Login</a></li>
                    </ul>
                </div>
                <div className="footerContactNav">
                    <h3 className="footerTitle">Contact</h3>
                    <ul>
                        <li><a href={'#'}>Address</a></li>
                        <li><a href={'#'}>Phone number</a></li>
                        <li><a href={'#'}>Email</a></li>
                    </ul>
                </div>
                <div className="footerSocialNav">
                    <h3 className="footerTitle">Social media links</h3>
                    <ul>
                        <li><a href={'#'}>Address</a></li>
                        <li><a href={'#'}>Phone number</a></li>
                        <li><a href={'#'}>Email</a></li>
                    </ul>
                </div>
            </nav>
            <div className="footerBottom">Little Lemon 2023</div>
        </footer>
    );
}