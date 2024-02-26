import React from "react";
import ChatScreen from "./ChatScreen";

const Screen= (props) =>
{

    return(<div>
            <div className='screen-one'>
              <div className='screen-header'>
                <div className='icon'></div>
                <div className='username'>{props.screen_username} <br/> Online</div>
              </div>
              <ChatScreen textItems={props.textItems} screen_username={props.screen_username} setTextItems={props.setTextItems}/>

            </div>
           
    </div>)
}

export default Screen;