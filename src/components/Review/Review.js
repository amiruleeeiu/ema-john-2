import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart,setCart]=useState([]);

    const placeOrder=()=>{
       setCart([]);
       processOrder();

    }

    const removeProduct=(productKey)=>{
        const newCart=cart.filter(pd=>pd.key!==productKey);

        setCart(newCart);
        removeFromDatabaseCart(productKey);

    }
    useEffect(()=>{
        //cart
        const saveCart=getDatabaseCart();
        const productKeys=Object.keys(saveCart);

        const cartProducts=productKeys.map(key=>{
            const product=fakeData.find(pd=>pd.key===key);
            product.quantity=saveCart[key];
            return product;
        })
        setCart(cartProducts);
    },[])

        


    return (
        <div className="shop-container">
            <div>
            {
                cart.map(pd=><ReviewItem
                    key={pd.key}
                    removeProduct={removeProduct} 
                    product={pd}>
                    </ReviewItem>)
            }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={placeOrder} className="product-btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;