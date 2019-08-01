import React from 'react'
import ProductAddForm from '../components/ProductAddForm';
import PageContentHeader from '../components/common/PageContentHeader';

const AddProduct = () => {
    return (
        <React.Fragment>
            <PageContentHeader title="Add New Product" />
            <ProductAddForm />
        </React.Fragment>
    )
}

export default AddProduct
