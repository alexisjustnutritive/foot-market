import React from 'react';
import ProductList from '../components/ProductList';
import PageContentHeader from '../components/common/PageContentHeader';

const Products = ( { products } ) => {
    return (
        <React.Fragment>
            <PageContentHeader title="Products" />
            <ProductList  products={ products } />
        </React.Fragment>
    )
}

export default Products
