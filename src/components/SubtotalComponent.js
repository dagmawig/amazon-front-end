import React from 'react';
import './SubtotalComponent.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateWrap';

function Subtotal () {
    const [{ cart }, dispatch] = useStateValue();
    const getCartTotal = (cart) => {
       return cart.reduce((total, item) => item.price+ total, 0);
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({cart.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        </div>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;