import { useEffect, useState } from "react";

function AuditionCard({audition, user}) {

    const [newTime, setNewTime] = useState(audition.prefered_time)

    function handleUpdate(id) {
        fetch(`/auditions/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prefered_time: newTime }),
        });
    }

    function handleDelete(id) {
        fetch(`/auditions/${id}`, {
          method: "DELETE",
        })
    }

    return (
        <div class="m-4 border-2 border-white">
            <form onSubmit={() => handleUpdate(audition.id)}>
                <div>Company: { audition.show.company}</div>
                <div>Show: {audition.show.title}</div>
                    Requested Time: <input defaultValue={audition.prefered_time} onChange={(e) => setNewTime(e.target.value)} ></input>&nbsp;
                <button class="border-white border-2">Edit</button>
                <button onClick={() => handleDelete(audition.id)} class="border-white border-2">🗑️ Delete</button> 
            </form>
        </div>
    )
}

export default AuditionCard;