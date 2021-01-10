import React from 'react';
import './CheckoutItemComponent.css';
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from './StateWrap';

function CheckoutItem ({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        });
    };
    return (
        <div className="checkoutItem">
            <img className="checkoutItem_image" src={image} />
            <div className="checkoutOtem_info">
                <p className="checkoutItem_title">{title}</p>
                <p classNAme="checkoutItem_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutItem_rating">
                <Rating name="read-only" value={rating} precision={0.5} readOnly />
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    );
}

export default CheckoutItem;