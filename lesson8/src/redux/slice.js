import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    text: 'Hello World!'
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        incrementCount: (state) =>{
            state.count++;
        },
        decrementCount: (state) =>{
            state.count--;
        },
        resetCount: (state) =>{
            state.count = 0;
        },
        setText: (state, action) =>{
            state.text = action.payload
        }
    }
})

export const {incrementCount, decrementCount, resetCount, setText} = counterSlice.actions;

export default counterSlice.reducer;
