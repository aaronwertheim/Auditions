import { Link, useHistory } from "react-router-dom";

function MessageCard({message, showMessage, setShowMessage}) {

    const date = new Date(message.created_at)
    const history = useHistory();
    function handleDelete(id) {
        fetch(`/messages/${id}`, {
              method: "DELETE",
        }).then(history.go(0))
    }

    return (
        <div class="py-0.5 px-0.5">
            <div class="block bg-white py-3 ">
                <div class="px-4 py-2 flex justify-between">
                    <span class="font-semibold text-gray-900 mr-4">{"From " + message.user.first_name + " " + message.user.last_name}</span>
                    <span class=" font-semibold text-gray-600 ml-4">{date.toLocaleString()}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm font-semibold text-blue-500 hover:underline px-4 py-2 cursor-pointer" onClick={() => setShowMessage(message)}>View Message</span>
                    <span class="text-sm font-semibold text-blue-500 hover:underline px-4 py-2 cursor-pointer"><Link to={`/send-messages/${message.user_id}`}>Reply</Link></span>
                    <span class="text-sm font-semibold text-blue-500 hover:underline px-4 py-2 cursor-pointer" onClick={() => handleDelete(message.id)}>Delete</span>
                </div>
                {showMessage === message ? <p class="px-4 py-2 text-sm font-semibold text-gray-700">{message.content}</p> : null}
            </div>
        </div>
    )
}

export default MessageCard