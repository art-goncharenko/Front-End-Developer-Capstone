import logo from './Logo.svg';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <meta name="description" content="Little Lemon is your local restaurant with the food you love"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description"
                  content="Looking for a new dining destination? Look no further than Little Lemon, where we serve up delicious Italian dishes made with the freshest ingredients. From classic pastas and wood-fired pizzas to mouthwatering seafood and handmade desserts, there's something for everyone at our cozy restaurant. Come join us for lunch or dinner and enjoy our warm atmosphere and top-notch service. Don't miss out on the delicious offerings at Little Lemon – visit us today"/>
            <meta name="og:image" content="./lemon.jpg"/>
        </header>
    );
}