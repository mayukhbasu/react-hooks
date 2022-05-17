import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + (action.value || 1)
            }
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - (action.value || 1)
            }
        case 'incrementTwo':
            return {
                ...state,
                secondCounter: state.secondCounter + (action.value || 1)
            }
        case 'decrementTwo':
            return {
                ...state,
                secondCounter: state.secondCounter - (action.value || 1)
            }
        case 'reset':
            return state
        default:
            return state
    }
}
const CounterTwo = () => {
   const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count1 is : {count.firstCounter}</p>
            <p>Count2 is : {count.secondCounter}</p>
            <button onClick={() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type:'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type:'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type:'incrementTwo', value: 2})}>Increment 2</button>
            <button onClick={() => dispatch({type:'decrementTwo', value: 2})}>Decrement 2</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    );
};

export default CounterTwo;