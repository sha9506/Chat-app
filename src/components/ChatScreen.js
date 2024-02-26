import React, {useState } from "react";
import sendIcon from '../assets/sendIcon.png';


const ChatScreen=(props)=>
{
    const [newText, setNewText]= useState('');
    
    const handle=()=>
    {
        const newchat = {
            content: newText, 
            username: props.screen_username, 
        }
        
        props.setTextItems([...props.textItems, newchat]);
    }

    const handleChange=(event)=>
    {
        setNewText(event.target.value)
    }
   
   
    return (<div className="chat-screen">
             <div className='chat-items'>

                {props.textItems.map((item)=>{
                    return ( <div className={props.screen_username===item.username? 'text-update' : 'text-update-one'}>
                    {item.content} 
                </div>)
                })}
             </div>
             <div className='chat-box'>
        <input className='chat' type='text' value={newText} placeholder='Send text' onChange={handleChange}/>
        <img className='send-icon' src={sendIcon} alt='' onClick={handle}/>
    </div> 
    </div>)
}

export default ChatScreen;