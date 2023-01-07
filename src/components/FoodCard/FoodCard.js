import './FoodCard.css';

export const FoodCard = () => {
    return (
        <article>
            <div className="specialCard">
                <img src="coursera/src/components/FoodCard/FoodCard" alt="special"/>
                <div className="titlePrice">
                    <h4>Greek salad</h4>
                    <p className="price">$ 12.99</p>
                </div>
                <p> the famous greek salad bla bla</p>
                <p>Order delivery</p>
            </div>
        </article>
    );
}