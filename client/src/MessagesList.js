import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";

function MessagesList({user}) {

   
    const [messages, setMessages] = useState([]);
    const [showMessage, setShowMessage] = useState([])

    useEffect(() => {
        fetch('/messages')
        .then(r => r.json())
        .then(messagesArray => setMessages(messagesArray.filter(message => message.recipient_id === user.id)))
    },[user.id])

    return (
        <main class=" flex bg-gray-800 mx-auto w-fit mt-10 mb-20 ">
            <div class={messages.length === 0 ? " mx-20" : "overflow-y-auto overflow-hidden pb-9"}>
                <div class="px-4 bg-gray-800 py-2 flex items-center justify-between ">
                    <div class="text-sm flex items-center font-bold text-white underline">
                        <span >{messages.length === 0 ? "No Messages" : "Your Messages:"}</span>
                    </div>  
                </div>
                <div>
                    {messages.map(message => (
                        <MessageCard key={message.id} message={message} showMessage={showMessage} setShowMessage={setShowMessage}/>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default MessagesList;