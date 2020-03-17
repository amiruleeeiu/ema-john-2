import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product;
    return (
        <div className="review-item">
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p><small>Price: {price}</small></p>
            <button onClick={()=>props.removeProduct(key)} className="product-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;