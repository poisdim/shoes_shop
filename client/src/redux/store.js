import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {cartReducer} from "./cartReducer";
import {shoesReducer} from "./shoesReducer";

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducer = combineReducers({
    cart: cartReducer,
    shoes: shoesReducer
});


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


