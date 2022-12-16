import React, {useState} from 'react'

import icon from '../../assets/chatbot-icon.png'
import ChatBox from './ChatBox'
import './ChatBot.css'

const ChatBot = () => {

    const [chatBox, setchatBox] = useState(false)
    const handleChatBot = () => {
        setchatBox(!chatBox)
    }

    return (
        <div className='chatbot'>
            <img src={icon} alt="chatbotIcon" onClick={handleChatBot}/>
            <div style={{maxWidth:"300px"}}>
                {
                    chatBox && <ChatBox />
                }
            </div>
        </div>
    )
}

export default ChatBot