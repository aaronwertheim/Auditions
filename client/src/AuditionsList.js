import { useEffect, useState } from "react";
import AuditionCard from "./AuditionCard"

function AuditionsList({user}) {

    const [auditions, setAuditions] = useState([]);
    
    
    useEffect(() => {
        fetch("/auditions")
        .then(r => r.json())
        .then(auditionsArray => setAuditions(auditionsArray) )
      },[])
      
    return (
        <div class="mx-auto bg-gray-200 h-screen px-8 w-full">
             <div class="w-full sm:w-3/4 md:w-1/2 lg:w-3/5 bg-gray-200">
                {auditions.map(audition => (
                    <AuditionCard key={audition.id} audition={audition} user={user}/>
                ))}
            </div>
        </div>
    )
}

export default AuditionsList;