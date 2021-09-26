import React from 'react';
import Rating from 'react-rating'
import './Product.css'
const Product = (props) => {
    const {title, img, sold, price, description, rating,publish} = props.product;
    return (
        <div className="product-main-section">
            <div className="product-card-details">
                <div>
                    <img src={img} alt="" />
                </div>
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
                    <button onClick={props.eventHandlerRegularBtn} className="regular-btn"> <i class="fas fa-shopping-cart"></i> <span>Add To Card</span></button>
                </div>
        
            </div>
        </div>
    );
};

export default Product;