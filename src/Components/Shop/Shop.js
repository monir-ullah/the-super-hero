import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);

    //  I use useEffect to load data from my local storage(PC)
     useEffect( () =>{
         fetch('./fakeDB.JSON')
         .then(res => res.json())
         .then(data => setProducts(data));
     },[])

    // Added Event handler to select/ add to cart the product 
     const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    // This Condition is for fun. This will you a error if you select more than 13 product. 
    if(cart.length>=14){
        alert("You have Selected more than 13 card. Do you have enough Money");
        return (
            <div className="red-cross">
                <h1>You Cann't Do this. Are you Thief/Hacker?</h1>
            </div>
        )
        
    }
    return (
        <div className="shop-main-div">
            <h1>Freature Event Cars</h1>
            <div className="shop-item-cart">
                <div className="product-grid">
                    {
                        // This section will get all product using map
                        products.map(product => <Product
                        product={product}
                        key={product.id}
                        eventHandlerRegularBtn={() =>handleAddToCart(product)}
                        ></Product>)
                    }
                </div>
                <div >
                    {/* This if for Cart Section */}
                       <div className="cart-info">
                        <Cart
                            cart={cart}
                            ></Cart>
                       </div>
                       <div className="added-name">
                            <h3>Selected Car Name</h3>
                           {
                              cart.map(name=> <h5>{name.title}</h5>)
                             
                           }
                            {
                                // This section is writen for to say i've already added key in the parent of product.
                                 console.log("Already Use Key as in every Child in the Product Component")
                            }
                       </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;