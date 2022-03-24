import React from 'react';
import "./Product.css";

const Product = ({ product }) => {
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
                </div>
            </div>
        </div>
    );
};

export default Product;