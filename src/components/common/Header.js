import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-5">
            <Link className="navbar-brand text-uppercase" to="/products">Market App</Link>
            <ul className="navbar-nav mr-auto flex-row">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products" activeClassName="active">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add-product" activeClassName="active">Add Product</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
