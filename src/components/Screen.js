import React from "react";
import ChatScreen from "./ChatScreen";

const Screen= () =>
{
    return(<div>
            <div className='screen-one'>
              <div className='screen-header'>
                <div className='icon'></div>
                <div className='username'>afsaanaaa_ <br/> Online</div>
              </div>
              <ChatScreen/>

            </div>
           
    </div>)
}

export default Screen;