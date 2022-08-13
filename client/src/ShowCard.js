import { Link } from "react-router-dom";

function ShowCard({show, user, setCurrentShow}) {
    return (
            <div class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100  mx-2">
                <div  class="h-64 w-auto md:w-1/2  py-1">
                    <img    
                        src={show.poster_url}
                        class=" h-full w-1/2 object-cover object-center m-auto border rounded "
                        alt="">
                    </img>
                </div>
                <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h2 class="font-semibold text-lg leading-tight truncate">{show.title}</h2>
                    <p class="mt-2 h-40 px-3 py-1.5 overflow-scroll border  rounded">{show.description}</p>
                    <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">{show.company}</p>
                </div>
                
                {user.role === "Performer" ? 
                    <Link   to="/new-audition" 
                            onClick={() => setCurrentShow(show)}
                            className="px-2 py-1  h-fit rounded m-1 hover:bg-gray-300 text-gray-700 border" >
                            Audition
                    </Link> : 
                    <>
                    <Link   to={`/shows/${show.id}/auditions`}
                            onClick={() => setCurrentShow(show)}
                            className="px-2 py-1  h-fit rounded m-1 hover:bg-gray-300 text-gray-700 border" >
                            Submissions
                    </Link>
                    <Link   to={`/shows/${show.id}`}
                            onClick={() => setCurrentShow(show)}
                            className="px-2 py-1  h-fit rounded m-1 hover:bg-gray-300 text-gray-700 border" >  
                            ✏️
                    </Link>
                    </>}
                    
            </div>  
    )
}

export default ShowCard;