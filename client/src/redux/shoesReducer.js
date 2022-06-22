import axios from "axios";

const FETCH_DATA = "FETCH_DATA";
const SET_DATA = "SET_DATA";
let initialState = {
    shoes: [],
};
export const shoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, shoes: action.payload};
        default:
            return state;
    }
};

let setDataAction = (payload) => ({
    type: SET_DATA, payload
});

export let fetchData = () => async (dispatch) => {
    try {
        let res = await axios('http://localhost:3002/shoes');
        dispatch(setDataAction(res.data));
    } catch (e) {
        console.log(e.message)
    }
};
