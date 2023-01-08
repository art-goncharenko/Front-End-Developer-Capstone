import './FoodCard.css';

export const FoodCard = ({name, image, price, description}) => {
    return (
        <article>
            <div className="specialCard">
                <img src={require(`../../img/${image}.jpg`)} alt={name}/>
                <div className="titlePrice">
                    <h4>{name}</h4>
                    <span className="price">$ {price}</span>
                </div>
                <p>{description}</p>
                <p className="delivery">Order delivery</p>
            </div>
        </article>
    );
}