import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Engineer from '../Engineer/Engineer';
import './Employee.css';

const Employee = () => {
    const [engineers, setEngineers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./engineers.JSON')
            .then(res => res.json())
            .then(data => setEngineers(data));
    }, [])

    const handleAddToCart = (engineer) => {
        const newCart = [...cart, engineer];
        setCart(newCart);
    };

    return (
        <div className="employee-container">
            <div className="engineer-container">
                {
                    engineers.map(engineer => <Engineer
                        key={engineer.key}
                        engineer={engineer}
                        handleAddToCart={handleAddToCart}
                    >
                    </Engineer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Employee;