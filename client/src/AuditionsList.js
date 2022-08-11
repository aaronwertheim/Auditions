import { useEffect, useState } from "react";

function AuditionsList() {

    const [auditions, setAuditions] = useState([]);
    
    useEffect(() => {
        fetch("/auditions")
        .then(r => r.json())
        .then(auditionsArray => setAuditions(auditionsArray))
      },[]);

    return (
        auditions.map(audition => (
            <div key={audition.id}>{audition.prefered_time}</div>
        ))
    )
}

export default AuditionsList;