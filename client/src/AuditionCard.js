import { useState } from "react";

function AuditionCard({audition, user}) {

    const [newAvailability, setNewAvailability] = useState(audition.availability)

    function handleUpdate(id) {
        fetch(`/auditions/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ availability: newAvailability }),
        });
    }

    function handleDelete(id) {
        fetch(`/auditions/${id}`, {
          method: "DELETE",
        })
    }

    return (
        <div class="m-4 border-2 p-1 rounded shadow-lg w-3/4 bg-white">
            <div class="flex flex-col md:flex-row">
                <div class="flex flex-row justify-around p-4 font-bold leading-none uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                    <div class="md:text-2xl text-center"><img src={audition.show.poster_url}></img></div>
               </div>
                <div class="p-4 font-normal bg-black text-white md:w-3/4">
                    <h1 class="text-4xl font-bold leading-none tracking-tight text-white">{audition.show.title} - {audition.desired_role}</h1>
                    
                    <form class=" mt-10 text-white " onSubmit={() => handleUpdate(audition.id)}>
                       <div class="flex flex-col" > 
                           <div class="text-lg"> Availability: </div><input class=" border border-black rounded p-1 w-max text-black " defaultValue={audition.availability} onChange={(e) => setNewAvailability(e.target.value)}></input>
                            <div><button class="border border-white rounded p-1 hover:bg-white hover:text-black">Edit ✏️</button>
                            <button class="mt-2 ml-4 border border-white rounded p-1 hover:bg-white hover:text-black" onClick={() => handleDelete(audition.id)}>Delete 🗑️ </button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default AuditionCard;