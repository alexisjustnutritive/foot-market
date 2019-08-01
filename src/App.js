import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Header from './components/common/Header';

function App() {

    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        const productsRes = async () => {
            let res = await axios.get( 'http://localhost:4000/food' );
            console.log( res.data );
            setProducts( res.data );
        }
        productsRes();

    }, [ ] )

    return (
        <Router>
            <Header />
            <main className="container">
                <Switch>
                    <Route exact path="/products" render={ () => {
                        return ( <Products products={ products } /> )
                    } } />
                    <Route exact path="/add-product" component={ AddProduct } />
                    <Route exact path="/products/edit-product/:id" component={ EditProduct } />
                    <Route exact path="/product/:id" component={ Product } />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
