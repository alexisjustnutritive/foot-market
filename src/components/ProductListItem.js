import React from 'react';
import { Link } from 'react-router-dom';

const ProductListItem = ( { product } ) => {
    return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <p>{ product.name }</p>
                <p>{ product.price }</p>
                <div>
                    <Link to={`/products/edit-product/${ product.id }`} className="btn btn-warning mx-2">Edit</Link>
                    <button className="btn btn-danger mx-2">Delete &times;</button>
                </div>
            </li>
        )
}

export default ProductListItem
