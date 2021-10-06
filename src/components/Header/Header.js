import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-section">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contacts</a>
            </div>
        </div>
    );
};

export default Header;