import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([]);
    
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


    const handleAddedProduct=(product)=>{
        const toBeAdded=product.key;
        const sameProduct=cart.find(pd=>pd.key===product.key);
        
        let count=1;
        let newCart;
        if(sameProduct){
            const count=sameProduct.quantity+1;
            
            sameProduct.quantity=count;
            
            
            const others=cart.filter(pd=>pd.key!==toBeAdded)
            newCart=[...others,sameProduct];
        }
        else{
            product.quantity=1;
            newCart=[...cart,product];
        }

        setCart(newCart);
        
        addToDatabaseCart(product.key,count);
        
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(product=><Product
                            key={product.key}
                            showAddToCart={true}
                            handleAddedProduct={handleAddedProduct}
                            product={product}>

                            </Product>)
                    }
                </ul>
            </div>
            
           <div className="cart-container">
               <Cart cart={cart}>
                <Link to="/review">
                    <button className="product-btn">Review Your Order</button>
                </Link>
               </Cart>
           </div>
            

        </div>
    );
};

export default Shop;