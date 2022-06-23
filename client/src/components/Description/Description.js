import React, {useEffect} from 'react';
import './Description.css';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchShoeInfoAction} from "../../redux/shoesReducer";
import {ColorBox} from "../ColorBox";
import {addToCart} from "../../redux/cartReducer";


export const Description = (props) => {
    let {id} = useParams();
    let {shoeInfo} = useSelector(state => state.shoes);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchShoeInfoAction(id))
    }, [id]);
    return (
        <>
            {shoeInfo ? <div className="details" key={shoeInfo._id}>
                <img src={shoeInfo.src} alt=""/>
                <div className="box">
                    <div className="row">
                        <h2>{shoeInfo.title}</h2>
                        <span>${shoeInfo.price}</span>
                    </div>
                    <ColorBox colors={shoeInfo.colors}/>
                    <p>{shoeInfo.description}</p>
                    <p>{shoeInfo.content}</p>
                    <Link to="/cart" className="cart" onClick={() => {
                        dispatch(addToCart(shoeInfo))
                    }}>
                        Add to cart
                    </Link>
                </div>
            </div> : <div>Loading...</div>}
        </>
    );
};