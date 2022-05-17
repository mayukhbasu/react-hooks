import React from 'react';

import './App.css';

//import Hookscallback from './components/callback/Hookscallback';
//import ParentComponent from './components/callback/ParentComponent';
import DocTitleOne from './components/custom-hooks/DocTitleOne';
import DocTitleTwo from './components/custom-hooks/DocTitleTwo';

//import DatafetchingOne from './components/DataFetchingWithreducer/DatafetchingOne';

// import MainComponent from './components/contextWithReducer/MainComponent';
// import CounterThree from './components/reducer/CounterThree';

//import CounterTwo from './components/reducer/CounterTwo';
//import CounterOne from './components/reducer/CounterOne';
//import ComponentC from './components/context/ComponentC';
//import Datafetching from './components/effects/Datafetching';
//import IntervalHookCounter from './components/effects/IntervalHookCounter';

//import HookCounterOne from './components/effects/HookCounterOne';
//import HookMouse from './components/effects/HookMouse';
//import MouseContainer from './components/effects/MouseContainer';

//import HookCounterThree from './components/HookCounterThree';
//import HooksCounterFour from './components/state/HooksCounterFour';
//import ClassCounter from './components/state/ClassCounter';
//import HookCounter from './components/state/HookCounter';
//import HookCounterTwo from './components/state/HookCounterTwo';



export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() { 
  return (
    <div className="App" style={{marginTop:'20px'}}>
      <DocTitleOne/>
      <DocTitleTwo/>
    </div>
  );
}

export default App;
