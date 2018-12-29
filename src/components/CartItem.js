import React from 'react';

class CartItem extends React.Component {
    render () {
        return <li>
            <h3> {this.props.item.name} </h3>
            <p> {this.props.item.quantity} x {this.props.item.price} </p>
        </li>;
    }
}

export default CartItem;