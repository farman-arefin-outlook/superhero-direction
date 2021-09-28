import React from 'react';
import './Hero.css'
const Hero = (props) => {
    const { name, img, Role, age, Country, Salary } = props.state;
    return (
        <div>
            <div className="hero-con">
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Role : {Role}</h4>
                <h3>Age : {age}</h3>
                <h4><small>Country: {Country}</small></h4>
                <h3>Salary: $ {Salary}</h3>
            </div>
        </div>
    );
};

export default Hero;