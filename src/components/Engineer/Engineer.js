import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Engineer.css';


const Engineer = (props) => {
    const {name, img, salary, department, experience, country} = props.engineer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="engineer">
            <div className="engineer-img">
                <img src={img} alt="" />
            </div>
            <div className="engineer-detail">
                <h4 className="engineer-name">Name: {name}</h4>
                <p>Expected Salary: {salary}</p>
                <p>Department: {department}</p>
                <p>Experience : {experience} years</p>
                <p>Country: {country}</p>
                <button onClick = {() => props.handleAddToCart(props.engineer)} class="btn-regular">{cartIcon} Select Engineer</button>
            </div>
        </div>
    );
};

export default Engineer;