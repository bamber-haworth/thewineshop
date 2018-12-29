import React from 'react';
import './ProductList.css';
import Product from './Product';

class ProductList extends React.Component {
    render() {
        let products = [
            { code:"P01", name: "Traditional Merlot", description: "A bottle of middle weight wine, lower in tannins (smoother), with a more red-fruited flavour profile."},
            { code: "P02", name: "Classic Chianti", description: "A medium bodied wine characterised by a marvellous freshness with a lingering, fruity finish."},
            { code: "P03", name: "Chardonnay", description: " A dry, full-bodied white wine with spicy, bourbony notes in an elegant bottle."},
        ];
        
        let productComponents = [];

        for (let product of products) {
            productComponents.push(<Product item={product}/>);
        }

        return <ul>{productComponents}</ul>;
    }
}
export default ProductList;