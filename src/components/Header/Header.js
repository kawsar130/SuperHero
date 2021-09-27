import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <h2 className="header-title">Engineers selection for a project</h2>
            <h4>We are seeking Engineers for a construction project</h4>
            <h3 className="header-budget">Our Estimating budget is $500000</h3>
        </div>
    );
};

export default Header;