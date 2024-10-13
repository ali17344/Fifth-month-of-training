import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios'
const GET_USER = 'GET_USER'


export const get_user = () =>{ 
    let action = createAction(GET_USER)
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => dispatch(action(data)))
    }
}

const initialState = {
     user: [],
}

export default createReducer(initialState, (builder) => {
    builder
    .addCase(GET_USER, (state, action ) => {
        state.user = action.payload
    })
})