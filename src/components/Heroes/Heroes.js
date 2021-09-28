import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import './Heroes.css'
const Heroes = () => {
    const [states, setState] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setState(data));
    }, [])

    return (
        <div className="container">
            <div className="heroes-container">
                <div className="heroes">
                    {
                        states.map(state => <Hero state={state}></Hero>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h1>Players Added: 0</h1>
                <h2>Total Cost: $0</h2>
            </div>
        </div>
    );
};

export default Heroes;