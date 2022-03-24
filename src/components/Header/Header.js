import React, { useEffect, useState } from 'react';
import { BsCartDash } from 'react-icons/bs';
import "./Header.css";
import Modal from 'react-modal';
import Mod from '../Modal/Mod';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const Header = ({ cart }) => {

    console.log(cart);
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {cart.map(product => <Mod product={product}></Mod>)}
            </Modal>
            <div className='header'>

                <div className='header-info'>
                    <div>
                        <h1>Gun Shop</h1>
                    </div>
                    <div className='cart' onClick={openModal}>
                        <BsCartDash className='icon' /><sup>{cart.length}</sup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;