import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    // console.log(props.cart)
    const totalPrice = cart.reduce( (total,prd) => total + prd.price, 0);


    return (
        <div className="cart">
            <p>Cart Summary: {cart.length}  </p>
            <h4>Total: {totalPrice} $</h4>
           
    
        </div>
    );
};

export default Cart;