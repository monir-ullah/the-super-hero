import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // This section is for total price
    const getCart = props.cart
    let total = 0;
    for (const product of getCart){
        // This section will calculate total selected price
        total = total + product.price;
    }
    
    return (
        <div>
            <div >
                {/* This section is for calucation info */}
                <h4>Total Car Selected : {getCart.length}</h4>
                <h2>Total Price:</h2>
                <h2>${total}</h2>
                
            </div>
        </div>
    );
};

export default Cart;