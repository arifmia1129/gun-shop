import React from 'react';
import "./Product.css";
import { BsCartDash } from 'react-icons/bs';
const Product = ({ product, addToCart }) => {
    const { name, price, img, action, category, bullet } = product;
    return (
        <div>
            <div className='card'>
                <div className='img-container'>
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <h2>Name : {name}</h2>
                    <p>Category : {category}</p>
                    <p>Action : {action}</p>
                    <p>Bullet : {bullet}</p>
                    <h2>{price}$</h2>
                    <button onClick={() => addToCart(product)} className='cart-btn'>
                        <BsCartDash ></BsCartDash>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;