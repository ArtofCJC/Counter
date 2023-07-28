import React, {  } from 'react';

import { useState } from 'react';

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <button class='button' id="plus" onClick={() => {setCount(count + 1)}}>+</button>
    <button class='button' id="minus" onClick={() => {setCount(count - 1)}}>-</button>
    <button class='button' id="zero" onClick={() => {setCount(0)}}>0</button>
    <h1>{count}</h1>
    </div>
  );

}

export default App;
