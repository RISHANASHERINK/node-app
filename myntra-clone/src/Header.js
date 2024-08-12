// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/2cloud.webp"  />
            </div>
            <nav className="nav-links">
                <a href="#men">Men</a>
                <a href="#women">Women</a>
                <a href="#kids">Kids</a>
                <a href="#home-living">Home & Living</a>
                <a href="#beauty">Beauty</a>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search for products, brands and more" />
                <button type="submit">Search</button>
            </div>
            <div className="user-actions">
                <a href="#profile">Profile</a>
                <a href="#wishlist">Wishlist</a>
                <a href="#bag">Bag</a>
            </div>
        </header>
    );
};

export default Header;
