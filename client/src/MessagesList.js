import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MessageCard from "./MessageCard";

function MessagesList({user}) {

    const history = useHistory();
    const [messages, setMessages] = useState([]);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        fetch('/messages')
        .then(r => r.json())
        .then(messagesArray => setMessages(messagesArray.filter(message => message.recipient_id === user.id)))
    },[user.id])


    return (
        <div>
            {messages.map(message => (
                <MessageCard key={message.id} message={message}/>
            ))}
        </div>
    )
}

export default MessagesList;