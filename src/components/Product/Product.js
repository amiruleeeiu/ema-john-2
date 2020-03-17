import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';


const Product = (props) => {
     const {name,img,seller,price,stock,key}=props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p>By: {seller}</p>
                <br/>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
            {props.showAddToCart &&   <button 
                className="product-btn" onClick={()=>props.handleAddedProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>}
            </div>
            
        </div>
    );
};

export default Product;