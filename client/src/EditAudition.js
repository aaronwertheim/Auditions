import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function EditAudition() {

    const {id} = useParams();
    const [audition, setAudition] = useState([])

    useEffect(() => {
        fetch(`/auditions/${id}`)
        .then(r => r.json())
        .then(array => setAudition(array))
    },[id])

    const [newTime, setNewTime] = useState(audition.audition_time)
    const [newDesiredRole, setNewDesiredRole] = useState(audition.desired_role)
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    function handleUpdate(e) {
        e.preventDefault();
        fetch(`/auditions/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            audition_time: newTime,
            desired_role: newDesiredRole,
        })
        }).then((r) => {
            if (r.ok) {
              history.push("/auditions-list");
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    function handleDelete() {
        fetch(`/auditions/${id}`, {
              method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                history.push("/auditions-list");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <section class="h-full gradient-form bg-gray-200 md:h-screen">
            <div class="container py-12 px-6 h-full">
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 ">
                    <div class="xl:w-10/12">
                        <div class="block bg-white shadow-lg rounded-lg">
                            <div class="lg:flex lg:flex-wrap g-0">
                                <div class="lg:w-6/12 px-4 md:px-0">
                                    <div class="md:p-12 md:mx-6">
                                        <form onSubmit={handleUpdate}> 
                                            <div class="mb-4">
                                                <input
                                                    type="text"
                                                    name="auditiontime"
                                                    placeholder="New Time"
                                                    onFocus={(e) => e.target.type = "time"}
                                                    onChange={(e) => setNewTime(e.target.value)}
                                                    min={audition?.show?.start_time} 
                                                    max={audition?.show?.end_time}  
                                                    step={audition?.show?.timeslot * 60} 
                                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">                                                
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <input           
                                                    name="desiredrole"
                                                    placeholder="New Role"
                                                    onChange={(e) => setNewDesiredRole(e.target.value)}
                                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="text-center py-1 mb-4 ">
                                                <button class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Update</button>
                                            </div>
                                            <div class="text-center py-1 mb-4 ">
                                                <button onClick={handleDelete} class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Cancel Audition</button>
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
                                    <h4 class="text-xl font-semibold mb-2 underline">Edit Audition Info for:</h4>
                                        <h4 class="text-lg font-semibold">{audition?.show?.title + " - " + audition?.show?.company}</h4>
                                        <h4 class="font-semibold mb-10">
                                            <input 
                                                type="time" 
                                                value={audition?.show?.start_time} 
                                                disabled={true} 
                                                class="bg-transparent">
                                            </input>{" - "}
                                            <input 
                                                type="time" 
                                                value={audition?.show?.end_time} 
                                                disabled={true} 
                                                class="bg-transparent">
                                            </input>
                                        </h4> 
                                        <h4 class="font-semibold">
                                            Your Current Audition Time: {} 
                                            <input 
                                                class="bg-transparent" 
                                                type="time" 
                                                value={audition.audition_time} 
                                                disabled={true}>
                                            </input>
                                        </h4>
                                        <h4 class="font-semibold">
                                            Role: {audition.desired_role}
                                        </h4>
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

export default EditAudition;