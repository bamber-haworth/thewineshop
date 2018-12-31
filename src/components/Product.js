import React from 'react';
import './Product.css';

class Product extends React.Component {
    render () {
        return <li>
            <h3> {this.props.item.name} </h3>
            <p><div className="price"> {this.props.item.price} </div></p>
            <p> {this.props.item.description} </p>
                <button onClick={() => this.props.addToCartHandler(this.props.item)}>Add to cart</button>
			<hr/>
        </li>;
    }
}

export default Product;