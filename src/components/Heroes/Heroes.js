import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import './Heroes.css'
const Heroes = () => {
    const [states, setState] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setState(data));
    }, [])
    const handleButton = (heroes) => {
        const newCart = [...cart, heroes];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="heroes-container">
                <div className="heroes">
                    {
                        states.map(state => <Hero
                            state={state}
                            key={state.name}
                            handleButton={handleButton}
                        ></Hero>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Heroes;