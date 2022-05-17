import React, { useContext } from 'react';
import { CountContext } from './MainComponent';

const ComponentB = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            <p>Count</p>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    );
};

export default ComponentB;