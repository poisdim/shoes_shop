import React from 'react';
import cart from '../../svg/shopping-cart-solid.svg';
import menu from '../../svg/bars-solid.svg'
import times from '../../svg/times-solid.svg';
import {NavLink, Link} from "react-router-dom";
import './Header.css';


export const Header = (props) => {
    let [isActive, setIsActive] = React.useState(false);
    let toggleMenu = () => {
        setIsActive(!isActive)
    };
    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={menu} alt="" width="20"/>
            </div>
            <div className="logo">
                <h1><Link to='/'>Nike</Link></h1>
            </div>
            <nav>
                <ul className={isActive ? 'isActive' : ''}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/login">Login / Register</NavLink></li>
                    <li className="close" onClick={toggleMenu}>
                        <img src={times} alt="" width="20"/>
                    </li>
                </ul>
            </nav>
            <div className="cart">
                <span>20</span>
                <Link to="/cart">
                    <img src={cart} alt="" width="20"/>
                </Link>
            </div>
        </header>
    );
};