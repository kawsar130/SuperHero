import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    const totalReducer = (previous, engineer) => previous + engineer.salary;

    const total = cart.reduce(totalReducer, 0);

    return (
        <div>
            <h3>Engineer Selection and Expenses</h3>
            <h5>Engineer Count: {props.cart.length}</h5>
            <p>Total Salary Expense: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;