import {Link} from "react-router-dom";
import restauranfood from "../../restauranfood.jpg";
import React from "react";
import "./Hero.css";

export const Hero = () => {
    return (
        <>
            <section>
                <div className="greenDiv">
                    <div className="heroDiv">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                            modern twist</p>
                        <button className="reserveBtn"><Link to="/BookingPage">Reserve a Table</Link></button>
                    </div>
                    <img src={restauranfood} alt="main" className="heroImg"/>
                </div>
            </section>
        </>
    )
}