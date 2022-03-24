import React from 'react';
import { BsCartDash } from 'react-icons/bs';
import "./Header.css";
const Header = () => {
    return (
        <div className='header'>
            <div className='header-info'>
                <div>
                    <h1>Gun Shop</h1>
                </div>
                <div >
                    <BsCartDash className='icon' /><sup>0</sup>
                </div>
            </div>
        </div>
    );
};

export default Header;