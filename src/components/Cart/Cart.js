import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const element1 = <FontAwesomeIcon icon={faUserAlt} />
    const element2 = <FontAwesomeIcon icon={faSortAmountUp} />
    let total = 0;
    for (const hero of cart) {
        total = total + hero.Salary;
    }
    return (
        <div>
            <h1>{element1} Heroes Added: {props.cart.length}</h1>
            <h2>{element2} Total Cost: $ {total}</h2>
        </div>
    );
};

export default Cart;