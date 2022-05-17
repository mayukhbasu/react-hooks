import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const initialState = 0;
const reducer = (state = initialState, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default: return state
    }
}
export const CountContext = React.createContext();
const MainComponent = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {count}
            <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
                <ComponentA/>
                <ComponentB/>
            </CountContext.Provider>
           
        </div>
    );
};

export default MainComponent;