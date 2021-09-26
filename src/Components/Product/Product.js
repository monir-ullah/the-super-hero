import React from 'react';
import Rating from 'react-rating'
import './Product.css'
const Product = (props) => {
    // This section use for distructuring data
    const {title, img, sold, price, description, rating,publish} = props.product;
    return (
        <div className="product-main-section">
            {/* This section is use for product image and info */}
            <div className="product-card-details">
                <div>
                    <img src={img} alt="" />
                </div>
                {/* THis section if for Product info */}
                <div className="pd-details">
                    <h3>Car Name : {title}</h3>
                    <p>{description}</p>
                    <h4>Total Sold Car: {sold}</h4>
                    <h4>First Release: {publish}</h4>
                    <Rating
                    readonly
                    initialRating = {rating} 
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    />
                    <h1>Price : ${price}</h1>
                    {/* This is Button */}
                    <button onClick={props.eventHandlerRegularBtn} className="regular-btn"> <i class="fas fa-shopping-cart"></i> <span>Add To Card</span></button>
                </div>
        
            </div>
        </div>
    );
};

export default Product;