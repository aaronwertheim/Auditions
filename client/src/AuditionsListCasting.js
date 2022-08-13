import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AuditionsListCasting({currentShow}) {
    
    const [auditions, setAuditions] = useState(currentShow.auditions); 
    const {id} = useParams() 

    useEffect(() => {
        fetch(`/shows/${id}/auditions`)
        .then(r => r.json())
        .then(array =>setAuditions(array))
    },[])
       
    return (
        <div class="w-max ">
        {auditions?.map(audition => (
            <div class="border-2 border-white rounded m-4"> 
                <div class=" p-2 "><span class="text-lg">Name: </span> {audition.full_name}</div>
                <div class=" p-2 bg-white"><span class="text-lg">Availability: </span> {audition.availability}</div>
                <div class=" p-2"><span class="text-lg">Desired Role: </span>{audition.desired_role}</div>
            </div>
        ))}
        </div>
    )      
}

export default AuditionsListCasting;