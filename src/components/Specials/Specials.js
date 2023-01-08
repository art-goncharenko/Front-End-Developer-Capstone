import "./Specials.css";
import {FoodCard} from "../FoodCard/FoodCard";
import React from "react";
import {specialsData} from "../../specialsData";

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
                    {specialsData.map((special) => {
                        return (
                            <FoodCard
                                key={special.id}
                                name={special.name}
                                description={special.description}
                                price={special.price}
                                image={special.image}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    );
}