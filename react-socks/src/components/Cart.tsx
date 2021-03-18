import React from 'react';
import './Cart.scss';
import {CartModel} from '../models';
import CartRepository from '../CartRepository';
import CartItem from './CartItem';

const Cart: React.FC = () => (
  <div className="cart-container">
    {CartRepository.getItems().map((item: CartModel) => (
      <CartItem key={item.sock.id} item={item} />
    ))}
  </div>
);

export default Cart;
