import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";


function MessageForm({user}) {

    const [content, setContent] = useState();
    const [recipient, setRecipient] = useState();
    
    const {id} = useParams();
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`/user/${id}`)
        .then(r => r.json())
        .then(user => setRecipient(user))
    },[id])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
            recipient_id: id,
            content,
          }),
        }).then((r) => {
            if(r.ok) {
                let newUnread = recipient?.unread + 1
                fetch(`/user/${id}/`, {
                    method: "PATCH",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        unread: newUnread
                    }),
                }).then((r) => {
                    if (r.ok) {
                       user.role === "Casting Director" ? history.goBack() : history.push("/auditions-list")
                    } else {
                        r.json().then((err) => setErrors(err.errors));
                    }
                    });
                        }
                    })
                }

   
    

    return (
        <section class="h-full gradient-form  md:h-screen">
        <div class="container py-12 px-6 h-full">
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div class="xl:w-10/12">
                    <div class="block bg-white shadow-lg rounded-lg">
                        <div class="lg:flex lg:flex-wrap g-0">
                            <div class="lg:w-6/12 px-4 md:px-0">
                                <div class="md:p-12 md:mx-6">
                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-4">
                                            <textarea   
                                                placeholder="Write Your Message..." 
                                                value={content} 
                                                onChange={(e) => setContent(e.target.value)} 
                                                class="form-control block w-full h-40 resize-none px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                            </textarea>
                                        </div>
                                        <div class="text-center pt-1 pb-1">
                                            <button 
                                                type="submit" 
                                                class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">
                                                Send
                                            </button>
                                        </div>
                                        
                                    </form>
                                    <div>
                                        {errors.map((err) => (
                                        <div key={err}>{err}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div class="bg-black lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                    <h4 class="text-xl font-semibold mb-2 underline">{"Send a Message to: " + recipient?.first_name + " " + recipient?.last_name}</h4>
                                    <p class="text-sm mt-10"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default MessageForm;

