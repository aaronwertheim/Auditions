import { Link } from "react-router-dom";

function MessageCard({message}) {
    return (
        <div>
            {message.content}
            <Link to={`/send-messages/${message.user_id}`}>Reply</Link>
        </div>
    )
}

export default MessageCard