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
        auditions.map(audition => (
            <AuditionCard key={audition.id} audition={audition} user={user}/>
        ))
    )
}

export default AuditionsList;