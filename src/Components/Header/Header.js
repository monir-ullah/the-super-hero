import React from 'react';
import logo from '../../Images/images-removebg-preview.png';
import './Header.css'
const Header = () => {
    return (
        <div className="logo-header">
            {/* This section is to show Header */}
            <div className="logo-img">
                <img src={logo} alt=""/>
            </div>
            <div className="btn-div">
                <button className="book-btn">Car Order Table</button>
            </div>
        </div>
    );
};

export default Header;