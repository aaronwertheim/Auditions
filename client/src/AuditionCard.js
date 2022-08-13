import { useState } from "react";

function AuditionCard({audition, user}) {

    const [newAuditionTime, setNewAuditionTime] = useState(audition.audition_time)

    function handleUpdate(id) {
        fetch(`/auditions/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ audition_time: newAuditionTime }),
        });
    }

    function handleDelete(id) {
        fetch(`/auditions/${id}`, {
          method: "DELETE",
        })
    }

    return (
        <div class="m-4 border-2 p-1 rounded shadow-lg w-full bg-white">
            <div class="flex flex-col md:flex-row">
                <div class="flex flex-row justify-around p-4 font-bold leading-none uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                    <div class="md:text-2xl text-center"><img src={audition.show.poster_url}></img></div>
               </div>
                <div class="p-4 font-normal bg-black text-white md:w-3/4">
                    <h1 class="text-4xl font-bold leading-none tracking-tight text-white">{audition.show.title} - {audition.desired_role}</h1>
                    <form class=" mt-10 text-white " onSubmit={() => handleUpdate(audition.id)}>
                       <div class="flex flex-col" > 
                            <div class="text-lg"> Audition Time:</div>
                            <input  type="time"
                                    class=" border border-black rounded p-1 w-2/5 text-black " 
                                    defaultValue={audition.audition_time} 
                                    onChange={(e) => setNewAuditionTime(e.target.value)}>
                            </input>
                            <div><button class="border border-white rounded p-1 hover:bg-white hover:text-black mr-4">Edit ✏️</button>
                            <button class="mt-2 border border-white rounded p-1 hover:bg-white hover:text-black" onClick={() => handleDelete(audition.id)}>Cancel Audition</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default AuditionCard;