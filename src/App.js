/*eslint-disable */
import React ,{useState} from 'react';
import './App.css';
import emoge from './components/emoge.jpg';

function App() {
  return (
    <div className="App">
        <h2>Portfolio Project</h2>
      <div>
        <img src={emoge}/>
      </div>
    </div>
  );
}


export default App;
