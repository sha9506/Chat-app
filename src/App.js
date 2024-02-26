import React, { useState } from 'react';
import './App.css';
import Screen from './components/Screen';

function App() {

  const [textItems, setTextItems] = useState(
    [
      {
        username: 'afsaanaa_',
        content: 'hey',
        time: '18:22',
      },
      {
        username: 'riyu_zaki',
        content: 'afsana',
        time: '18:22',
      },
      {
        username: 'afsaanaa_',
        content: 'how are you',
        time: '18:22',
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
