import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
         <h4>This is a cart</h4>
         <p>Selected items:{cart.length}</p>

        </div>
    );
};

export default Cart;