import React from 'react';

class CartItem extends React.Component {
    render () {
        return <li className="cart-item">
            <h3> {this.props.item.name} </h3>
            <p>  x {this.props.item.quantity} </p>
            
        </li>;
    }
}

export default CartItem;