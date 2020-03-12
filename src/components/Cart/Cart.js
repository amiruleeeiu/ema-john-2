import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const cart=props.cart;
    console.log(cart);
    
    const total=cart.reduce((total,prd)=>total+prd.price,0);
   
    

    let shipping=0;

    if(total>70){
        shipping=4.77;
    }
    else if(total>10){
        shipping=12.99
    }
    
    const tax=total/10;

    const grandTotal=total+shipping+tax;

    const numberFormate=(num)=>{
        const formate=num.toFixed(2);
        return Number(formate);
    }


    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Product Price:{numberFormate(total)} </small></p>
            <p><small>Shipping:{numberFormate(shipping)}</small></p>
            <p><small>Tax & Vat: {numberFormate(tax)}</small></p>
            <p><small>Total Price: {numberFormate(grandTotal)}</small></p>
            <button className="review-button">Review Your Order</button>
            
        </div>
    );
};

export default Cart;