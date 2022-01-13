import React, {useState} from 'react';
import {ChatEngine, getOrCreateChat} from 'react-chat-engine'


const DirectChat = () => {
    
    const[username, setUsername] = useState('')

    
    function implementingDirectChat(creds){
        
        getOrCreateChat(
            creds,
    
            {is_direct_chat: true, usernames:[username]},
            () => setUsername('')
        )
    }

    const displayChatInterface = (creds) => {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder='Find username'
                    value={username}
    
                    onChange = {(e) => setUsername(e.target.value)}
                />

                {}
                <button onClick={() => implementingDirectChat(creds)}>
                    Create Chat
                </button>

            </div>
        )
    }

    return(
        <ChatEngine
            height='100vh'
            width='100vw'
            userName='rohit'
            userSecret ='84e4f97c-0a20-4d01-8658-c7dd66f00cce'
            projectID ='7ec6ca51-ae32-409d-a0ff-b3b0490a526a'
            displayNewChatInterface={(creds) => displayChatInterface(creds)}
            />
    )
    
}

export default DirectChat


