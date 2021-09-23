import React from 'react';

import "./cart.css"
const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((previous, product) => previous + product.price, 0)

    return (
        <div>
            <h3>Orderd Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Delevary Charge: </p>
            <p>Total price:{total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;