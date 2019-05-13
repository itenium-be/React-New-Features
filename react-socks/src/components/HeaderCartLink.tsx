import React from 'react';
import { Link } from 'react-router-dom';
import CartRepository from '../CartRepository';

function HeaderCartLink() {
    return (
        <Link to="/cart" className="cart">
            {CartRepository.getCartLength()}
            <i className="fas fa-shopping-cart" />
        </Link>
    );
}

export default HeaderCartLink;
