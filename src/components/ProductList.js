import React from 'react';
import ProductListItem from './ProductListItem';


const ProductList = ( { products } ) => {
    return (
        <ul className="list-group">
            { 
                products.map( product =>
                    <ProductListItem product={ product } key={ product.id } />
                )
            }
        </ul>
    )
}

export default ProductList
