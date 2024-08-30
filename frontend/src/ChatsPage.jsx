/*
import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('981a2e18-ffe7-49f7-a496-6bc9133ded94', props.user.username, props.user.secret) //Project ID
  return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
  )
}
*/

import { PrettyChatWindow } from 'react-chat-engine-pretty'
import dotenv from 'dotenv';

dotenv.config();
const ChatsPage = (props) => {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <PrettyChatWindow
          projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
          username={props.user.username} 
          secret={props.user.secret} 
          style={{ height: "100%" }}
        />
      </div>
    );
  };


export default ChatsPage