import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

function DirectorPage({user, setCurrentShow}) {
    const [shows, setShows] = useState([]);
    const showsToDisplay = shows.filter(show => show.user_id === user.id)

    useEffect(() => {
        fetch("/shows")
        .then(r => r.json())
        .then(showsArray => setShows(showsArray))
      },[]);

   if (showsToDisplay.length === 0)  return (
        <div class="text-center text-gray-800 uppercase text-4xl font-semibold mt-4">
            You do not currently have any casting calls
        </div>
    )  
    
    return (
        <div class="flex">
            <div class="pt-6 pb-12 bg-gray-200 mx-auto">
                <h1 class="text-center text-gray-800 uppercase text-4xl font-semibold mt-4">Your Casting Calls</h1>
                <div class="container w-100 lg:w-4/5 mx-auto flex flex-col mt-8">
                    {showsToDisplay.map(show => (
                        <ShowCard key={show.id} show={show} user={user} setCurrentShow={setCurrentShow} /> 
                    ))}
                </div>     
            </div>
        </div>
    )
}

export default DirectorPage;