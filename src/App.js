import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {decrement, increment} from "./actions";

function App() {
  const counter  = useSelector(state => state.CounterReducer)
  const isLogged  = useSelector(state => state.LoggedReducer)
  const dispatch = useDispatch();
  return (
    <div className="App">
    <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isLogged
      ?  <h3>valuable info i shouldnt see</h3>
      : ''
      }

    </div>
  );
}

export default App;
