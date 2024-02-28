import React, { useState } from 'react';
import './App.css';
import Screen from './components/Screen';

function App() {

  function getCurrentTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    return hour + ":" + minute;
  }

  const [textItems, setTextItems] = useState(
    [
      {
        username: 'afsaanaa_',
        content: 'hey',
        time: getCurrentTime(),
      },
      {
        username: 'riyu_zaki',
        content: 'afsana',
        time: getCurrentTime(),
      },
      {
        username: 'afsaanaa_',
        content: 'how are you',
        time: getCurrentTime(),
      },
  ]
  )
  
  
    return ( <div>
        <div className='header'>CHAT HERE</div>
        <div className='screen'>
            <Screen screen_username={'afsaanaa_'} textItems={textItems} setTextItems={setTextItems}/> 
            <Screen screen_username={'riyu_zaki'} textItems={textItems} setTextItems={setTextItems}/>
        </div>
    </div>
      
      
    );
  }


export default App;
