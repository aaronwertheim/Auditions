import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

function DirectorPage({user}) {
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        fetch("/shows")
        .then(r => r.json())
        .then(showsArray => setShows(showsArray))
      },[]);

      const showsToDisplay = shows.filter(show => show.id === user.id)
    
    return (
        <div class="pt-6 pb-12 bg-gray-200">
            <h1 class="text-center font-serif  uppercase text-4xl xl:text-5xl">Director page for {user.username}</h1>
            <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
                {showsToDisplay.map(show => (
                    <ShowCard key={show.id} show={show} user={user} /> 
                ))}
            </div>
            
            
        </div>
    )
}

export default DirectorPage;