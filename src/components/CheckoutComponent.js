import React from 'react';
import './CheckoutComponent.css';
import CheckoutItem from './CheckoutItemComponent';
import { useStateValue } from './StateWrap';
import Subtotal from './SubtotalComponent'

function Checkout() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_one">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/BISS/biss-Deals-banner-profession_3000x600_EN._CB1198675309_.png" alt="ad" />
                <h3>Hello</h3>
                <h2 className="checkout_title">Your Shopping Cart</h2>
                {cart.map((item) => 
                    <CheckoutItem
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                )}
            </div>
            <div className="checkout_two">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;