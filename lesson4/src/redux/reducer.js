import { createAction, createReducer } from "@reduxjs/toolkit";

const INCREMENT_NUM ='INCREMENT_NUM'
const DECREMENT_NUM = 'DECREMENT_NUM'
const SET_TEXT = 'SET_TEXT'

export const increment_num = createAction(INCREMENT_NUM)
export const decrement_num = createAction(DECREMENT_NUM)
export const set_text = createAction(SET_TEXT)

const initialState = {
    num: 0,
    text: 'Hello World'
}

export default createReducer(initialState, (builder) => {
    builder
    .addCase(INCREMENT_NUM, (state, action ) => {
        if(state.num < 15) state.num++;
    })
    .addCase(DECREMENT_NUM,(state, action) => {
        if (state.num > 0) {
            state.num--
        }
    } )
    .addCase(SET_TEXT, (state,action) => {
        state.text = action.payload
    })
})