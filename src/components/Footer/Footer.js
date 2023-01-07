import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footerTag">
            <img src="coursera/src/components/Footer/Footer" alt="footer"/>
            <nav className="footerNav">
                <section className="footerDoormatNav">
                    <h3>Doormat navigation</h3>
                    <ul>
                        <li><a href={'#'}>Home</a></li>
                        <li><a href={'#'}>About</a></li>
                        <li><a href={'#'}>Menu</a></li>
                        <li><a href={'#'}>Reservations</a></li>
                        <li><a href={'#'}>Order online</a></li>
                        <li><a href={'#'}>Login</a></li>
                    </ul>
                </section>
                <section className="footerContactNav">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href={'#'}>Address</a></li>
                        <li><a href={'#'}>Phone number</a></li>
                        <li><a href={'#'}>Email</a></li>
                    </ul>
                </section>
                <section className="footerSocialNav">
                    <h3>Social media links</h3>
                    <ul>
                        <li><a href={'#'}>Address</a></li>
                        <li><a href={'#'}>Phone number</a></li>
                        <li><a href={'#'}>Email</a></li>
                    </ul>
                </section>
            </nav>
        </footer>
    );
}