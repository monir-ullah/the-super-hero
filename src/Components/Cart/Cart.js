import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const getCart = props.cart
    let total = 0;
    for (const product of getCart){
        total = total + product.price;
    }
    
    return (
        <div>
            <div >
                <h4>Total Car Selected : {getCart.length}</h4>
                <h2>Total Price:</h2>
                <h2>${total}</h2>
                
            </div>
        </div>
    );
};

export default Cart;