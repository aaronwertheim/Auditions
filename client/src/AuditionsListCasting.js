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
        auditions?.map(audition => (
            <div> 
                <h1>Name: {audition.full_name}</h1>
                <h1>Availability: {audition.availability}</h1>
                <h1>Desired Role: {audition.desired_role}</h1>
            </div>
        ))
    )      
}

export default AuditionsListCasting;