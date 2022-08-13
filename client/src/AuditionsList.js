import { useEffect, useState } from "react";
import AuditionCard from "./AuditionCard"

function AuditionsList({user}) {

    const [auditions, setAuditions] = useState([]);
    
    
    useEffect(() => {
        fetch("/auditions")
        .then(r => r.json())
        .then(auditionsArray => setAuditions(auditionsArray) )
      },[])
      

    if (auditions.length === 0) return (<div class="text-center font-serif  uppercase text-4xl xl:text-5xl  mt-20">You currently have no upcoming auditions</div>)
    return (
        <div class="flex">
            <div class="mx-auto bg-gray-200  px-8 w-full">
                <div class="w-full sm:w-3/4 md:w-1/2 lg:w-3/5 bg-gray-200 ">
                    {auditions.map(audition => (
                        <AuditionCard key={audition.id} audition={audition} user={user}/>
                    ))}
                </div>
            </div>
            <div class="bg-white border-2 border-l-gray-600 text-center w-1/6 min-h-screen overflow-x-hidden "></div>
        </div>
    )
}

export default AuditionsList;