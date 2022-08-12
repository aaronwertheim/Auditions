import { useState } from "react";

function AuditionsListCasting({currentShow}) {
    
    const [auditions, setAuditions] = useState(currentShow.auditions);  
       
    return (
        auditions.map(audition => (
            <div> 
                <h1>Name: {audition.full_name}</h1>
                <h1>Availability: {audition.availability}</h1>
                <h1>Desired Role: {audition.desired_role}</h1>
            </div>
        ))
    )      
}

export default AuditionsListCasting;