import ShowCard from "./ShowCard";
import { useEffect, useState } from "react";


function PerformerPage({user, setCurrentShow}) {
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        fetch("/shows")
        .then(r => r.json())
        .then(showsArray => setShows(showsArray))
      },[]);

    return (
        <div class="pt-6 pb-12 bg-gray-200">
            <h1 class="text-center font-serif  uppercase text-4xl xl:text-5xl">Open Casting Calls</h1>
            <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
                {shows.map(show => (  
                    <ShowCard key={show.id} show={show} user={user} setCurrentShow={setCurrentShow}/> 
                ))}
            </div>
        </div>
    )
}

export default PerformerPage;