import React from 'react';
import './Cart.css';
import CartList from './CartList';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {cartItems: []};
    }

    render(){
        return <div className="cart"> <h2>Cart</h2><CartList items={this.state.cartItems}/></div>;
    }

    componentWillReceiveProps(nextProps) {
        let newCartList = [];

        for (let item of nextProps.items) {
            let foundItem = newCartList.find(x => x.code === item.code);
            if (foundItem) {
                foundItem.quantity = foundItem.quantity + 1;
            } else {
                item.quantity = 1;
                newCartList.push(item);
            }
           this.setState({ cartItems: [...newCartList]});
        }
        }
    }
export default Cart;