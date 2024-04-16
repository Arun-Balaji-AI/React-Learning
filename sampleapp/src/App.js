import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className='container'>
      <button className = "increase"onClick={() => setCounter(counter + 1)}>+</button>
      <button className = "decrease" onClick={() => setCounter(counter - 1)}>-</button>
      </div>
      <div className='reset'>
      <button onClick={() => setCounter(0)}>Reset</button>
      </div>
      <div className='counter'>
        <h3>{counter}</h3>
      </div>
      
    </>
  )
}


export default App;