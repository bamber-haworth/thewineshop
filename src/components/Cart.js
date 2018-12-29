import React from 'react';
import './Cart.css';
import CartList from './CartList';

class Cart extends React.Component {
    render() {
        return (
            <div className="cartList">
            <header className="Cart-header">
             <h2> Your Basket</h2>
            </header>
            < CartList />
          </div>
        )
    }
}

export default Cart;