import { createAction, createReducer } from "@reduxjs/toolkit";

const INCREMENT_NUM ='INCREMENT_NUM'
const DECREMENT_NUM = 'DECREMENT_NUM'

export const increment_num = createAction(INCREMENT_NUM)
export const decrement_num = createAction(DECREMENT_NUM)

const initialState = {
    num: 0,
}

export default createReducer(initialState, (builder) => {
    builder
    .addCase(INCREMENT_NUM, (state, action ) => {
        if(state.num < 15) state.num += 5;
    })
    .addCase(DECREMENT_NUM,(state, action) => {
        if (state.num > 0) {
           state.num -= 5
        }
    } )
})