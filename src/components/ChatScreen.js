import React, {useState } from "react";
import sendIcon from '../assets/sendIcon.png';


const ChatScreen=()=>
{
    const [text, setText]= useState("");
    const [newText, setNewText]= useState('');
    
    const handle=()=>
    {
        setText(newText);
    }
   
    const handleChange=(event)=>
    {
        setNewText(event.target.value)
    }
   
   
    return (<div className="chat-screen">
             <div className='chat-items'>
                <div className="text-update">{text}</div>
             </div>
             <div className='chat-box'>
        <input className='chat' type='text' value={newText} placeholder='Send text' onChange={handleChange}/>
        <img className='send-icon' src={sendIcon} alt='' onClick={handle}/>
    </div> 
    </div>)
}

export default ChatScreen;