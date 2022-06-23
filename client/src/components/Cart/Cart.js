import React, {useEffect} from 'react';
import {ColorBox} from "../ColorBox";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './Cart.css';

import {countCart, decrementCount, deleteFromCart, incrementCount} from "../../redux/cartReducer";

export const Cart = () => {

    let {cart, total} = useSelector(state => state.cart);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(countCart())
    }, []);
    if (cart.length === 0) {
        return <h2 style={{textAlign: "center"}}>Nothings Product</h2>
    } else {
        return (
            <>
                {
                    cart.map(item => (
                        <div className="details cart" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <ColorBox colors={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className="amount">
                                    <button className="count" onClick={() => {
                                        dispatch(decrementCount(item._id));
                                        dispatch(countCart())
                                    }}> -
                                    </button>
                                    <span className={'countInDec'}>{item.count}</span>
                                    <button className="count" onClick={() => {
                                        dispatch(incrementCount(item._id));
                                        dispatch(countCart())
                                    }}> +
                                    </button>
                                </div>
                            </div>
                            <div className="delete" onClick={() => {
                                dispatch(deleteFromCart(item._id))
                            }}>X
                            </div>
                        </div>
                    ))
                }
                <div className="total">
                    <Link to="/payment">Payment</Link>
                    <h3>Total: ${total}</h3>
                </div>
            </>
        )
    }
};