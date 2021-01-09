import React from 'react';
import './ItemComponent.css';
import StarIcon from '@material-ui/icons/Star';
import Rating from '@material-ui/lab/Rating';

function Item({id, title, image, price, rating}) {
    return (
        <div className="item">
            <div className="item_info">
                <p>{title}</p>
                <p className="item_price" >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="item_rating">
                    <Rating name="read-only" value={rating} precision={0.5} readOnly />
                    {/* {Array(rating)
                    .fill()
                    .map(() => (
                        <StarIcon style={{fill: "orange"}} />
                    ))} */}
                </div>
            </div>
            <img src={image} alt={title} />
            <button>Add to Cart</button>
        </div>
    );
}

export default Item;