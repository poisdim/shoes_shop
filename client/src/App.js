import React from 'react';
import {Header} from "./components/Header/Header";
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {Home} from "./components/Home/Home";
import {Cart} from "./components/Cart/Cart";
import {Description} from "./components/Description/Description";
import {Payment} from "./components/Payment/Payment";

export const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/shoes/:id'} element={<Description/>}/>
                <Route path={'/payment'} element={<Payment/>}/>
            </Routes>
        </div>
    );
};