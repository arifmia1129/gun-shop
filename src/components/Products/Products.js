import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import "./Products.css";
const Products = ({ openModal }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <Header cart={cart} openModal={openModal}></Header>
            <div className='products'>

                {
                    products.map(product => <Product key={product.id} addToCart={addToCart} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;