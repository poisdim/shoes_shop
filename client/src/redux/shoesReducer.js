import axios from "axios";

const SET_DATA = "SET_DATA";
const SET_SHOE_INFO = 'SET_SHOE_INFO';
let initialState = {
    shoes: [],
    shoeInfo: null
};
export const shoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, shoes: action.payload};
        case SET_SHOE_INFO:
            return {...state, shoeInfo: action.payload};
        default:
            return state;
    }
};

let setShoeInfoAction = (payload) => ({
    type: SET_SHOE_INFO, payload
});

let setDataAction = (payload) => ({
    type: SET_DATA, payload
});

export let fetchShoeInfoAction = (id) => async (dispatch) => {
    try {
        let res = await axios(`http://localhost:3002/shoes/${id}`);
        dispatch(setShoeInfoAction(res.data));
    } catch (e) {
        console.log(e.message)
    }
};


export let fetchData = () => async (dispatch) => {
    try {
        let res = await axios('http://localhost:3002/shoes');
        dispatch(setDataAction(res.data));
    } catch (e) {
        console.log(e.message)
    }
};
