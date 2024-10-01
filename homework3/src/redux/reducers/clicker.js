const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM'

const initState = {
    num: 0,
}
export default (state = initState, action) => {
    switch (action.type) {
  
        case INCREMENT_NUM :{
            return{
                ...state,
                num: state.num + 5
            }
        }
        case DECREMENT_NUM:{
            return{
                ...state,
                num: state.num - 5
            }
        }

        default: return state
    }}
export const incrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: INCREMENT_NUM})
    }
};
export const decrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: DECREMENT_NUM})
    }
};
