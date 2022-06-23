import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/shoesReducer";
import './Home.css';
import {addToCart} from "../../redux/cartReducer";

export const Home = (props) => {
    let {shoes} = useSelector(state => state.shoes);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    }, []);
    return (
        <div id="product">
            {
                shoes.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/shoes/${product._id}`}>
                            <img src={product.src} alt=""/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/shoes/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button onClick={() => {
                                dispatch(addToCart(product))
                            }}>Add to cart
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};