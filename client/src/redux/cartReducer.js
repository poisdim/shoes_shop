let ADD_TO_CART = 'ADD_TO_CART';
let COUNT_CART = 'COUNT_CART';
let INCREMENT_COUNT = 'INCREMENT_COUNT';
let DECREMENT_COUNT = 'DECREMENT_COUNT';
let DELETE_FROM_CART = 'DELETE_FROM_CART';

let initialState = {
    cart: [],
    total: 0
};
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const cartItems = [...state.cart];
            let alreadyExists = false;
            cartItems.forEach((x) => {
                if (x._id === action.payload._id) {
                    alreadyExists = true;
                    x.count++;
                }
            });
            if (!alreadyExists) {
                cartItems.push({...action.payload, count: 1});
            }
            return {...state, cart: cartItems}
        }
        case COUNT_CART:
            return {...state, total: state.cart.reduce((a, b) => a + b.price * b.count, 0)};
        case DELETE_FROM_CART:
            return {
                ...state, cart: state.cart.filter(el => el._id !== action.payload)
            };
        case INCREMENT_COUNT:
            return {
                ...state, cart: state.cart.map(el => {
                    if (el._id === action.payload) {
                        el.count++;
                    }
                    return el
                })
            };
        case DECREMENT_COUNT:
            return {
                ...state, cart: state.cart.map(el => {
                    if (el._id === action.payload && el.count > 1) {
                        el.count--;
                    }
                    return el;
                })
            };


        default:
            return state;
    }
};


export let addToCart = (payload) => ({
    type: ADD_TO_CART, payload
});

export let countCart = () => ({
    type: COUNT_CART
});


export let incrementCount = (payload) => ({
    type: INCREMENT_COUNT, payload
});

export let decrementCount = (payload) => ({
    type: DECREMENT_COUNT, payload
});


export const deleteFromCart = (payload) => ({
    type: DELETE_FROM_CART, payload
});
