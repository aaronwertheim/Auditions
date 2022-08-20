import { useEffect, useState } from "react";
import AuditionCard from "./AuditionCard"

function AuditionsList({user}) {

    const [auditions, setAuditions] = useState([]);
    
    
    useEffect(() => {
        fetch("/auditions")
        .then(r => r.json())
        .then(auditionsArray => setAuditions(auditionsArray) )
      },[])
      

    if (auditions.length === 0) return (<div class="text-center font-semibold uppercase text-4xl mt-20">You currently have no upcoming auditions</div>)
    return (
        <div class="w-fit bg-gray-200 mx-auto">
            {auditions.map(audition => (
                <AuditionCard key={audition.id} audition={audition} user={user}/>
            ))}
        </div> 
    )
}

export default AuditionsList;