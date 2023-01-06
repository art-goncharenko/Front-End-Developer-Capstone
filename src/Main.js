import './Main.css';
import restauranfood from "./restauranfood.jpg";
import {FoodCard} from "./FoodCard";
import {Link} from "react-router-dom";

export const Main = () => {
    return (
        <main>
            <section>
                <div className="greenDiv">
                    <div className="heroDiv">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                            modern twist</p>
                        <button className="reserveBtn"><Link to="/ReserveATable">Reserve a Table</Link></button>
                    </div>
                    <img src={restauranfood} alt="main" className="heroImg"/>
                </div>
            </section>
            <section>
                <div className="specials">
                    <h3>This week specials!</h3>
                    <button className="onlineMenuBtn">Online Menu</button>
                </div>
            </section>
            <section>
                <div className="specialCards">
                    <FoodCard/>
                    <FoodCard/>
                    <FoodCard/>
                </div>
            </section>
        </main>
    );
}