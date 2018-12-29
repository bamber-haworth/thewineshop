import React from 'react';
import './CartList.css';
import CartItem from './CartItem';

class CartList extends React.Component {
render() {
            let items = [
                { code:"C01", name: "Traditional Merlot", description: "A bottle of middle weight wine, lower in tannins (smoother), with a more red-fruited flavour profile.", quantity: 2, price: 8.90 },
                { code:"C02", name: "Chardonnay", description: " A dry, full-bodied white wine with spicy, bourbony notes in an elegant bottle.", quantity: 1, price: 8.20 },
            ];
            
            let itemsComponents = [];
    
            for (let item of items) {
                itemsComponents.push(<CartItem item={item}/>);
            }
    
            return <ul>{itemsComponents}</ul>;
        }
    }

export default CartList;