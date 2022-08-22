import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";

function MessagesList({user}) {

    const [messages, setMessages] = useState([])
    useEffect(() => {
        fetch('/messages')
        .then(r => r.json())
        .then(messagesArray => setMessages(messagesArray.filter(message => message.recipient_id === user.id)))
    },[])


    return (
        <div>
            {messages.map(message => (
                <MessageCard key={message.id} message={message}/>
            ))}
        </div>
    )
}

export default MessagesList;