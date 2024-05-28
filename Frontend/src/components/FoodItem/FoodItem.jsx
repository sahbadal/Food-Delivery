import { useContext } from 'react';
import { assets } from '../../assets/assets.js';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext.jsx';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems = {}, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='food-item-container'>
            <div className='image-container'>
                <img src={url + "/images/" + image} alt={name} />
                {
                    !cartItems[id]
                        ? <img onClick={() => addToCart(id)} src={assets.add_icon_white} className='add' alt="Add to cart" />
                        : <div className='food-item-counter'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more to cart" />
                        </div>
                }
            </div>
            <div className='foot-item-content'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
}

export default FoodItem;
