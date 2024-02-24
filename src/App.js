import React from 'react';
import './App.css';
import Screen from './components/Screen';

function App() {
    return ( <div>
        <div className='header'>CHAT HERE</div>
        <div className='screen'>
            <Screen/> 
            <Screen/>

        </div>
    </div>
      
      
    );
  }


export default App;
