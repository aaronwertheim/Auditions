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
        <div class="m-4 border-2 border-white">
            <form onSubmit={() => handleUpdate(audition.id)}>
                <div>Company: { audition.show.company}</div>
                <div>Show: {audition.show.title}</div>
                <div>Desired Role: {audition.desired_role}</div>
                    Availability: <input defaultValue={audition.availability} onChange={(e) => setNewAvailability(e.target.value)} ></input>&nbsp;
                <button class="border-white border-2">Edit</button>
                <button onClick={() => handleDelete(audition.id)} class="border-white border-2">🗑️ Delete</button> 
            </form>
        </div>
    )
}

export default AuditionCard;