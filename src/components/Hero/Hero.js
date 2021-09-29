import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Hero.css'
const Hero = (props) => {

    const { name, img, Role, age, Country, Salary } = props.state;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div>
            <div className="hero-con">
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Role : {Role}</h4>
                <h3>Age : {age}</h3>
                <h4><small>Country: {Country}</small></h4>
                <h3>Salary: $ {Salary}</h3>
                <button onClick={() => props.handleButton(props.state)} className="btn">
                    {element} Buy Now</button>
            </div>
        </div>
    );
};

export default Hero;