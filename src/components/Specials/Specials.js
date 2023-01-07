import "./Specials.css";
import {FoodCard} from "../FoodCard/FoodCard";
import React from "react";

export const Specials = () => {
    return (
        <>
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
        </>
    );
}