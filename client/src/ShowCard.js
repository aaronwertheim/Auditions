import { Link } from "react-router-dom";

function ShowCard({show, user, setCurrentShow}) {
    return (
            <div class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl w-100 my-2.5 mx-2 py-1.5 px-1.5">
                <div  class="h-64 w-auto md:w-1/2 ">
                    {show.poster_url ? 
                        <img    
                            src={show.poster_url}
                            class=" h-full w-1/2 object-cover object-center m-auto border rounded shadow-xl"
                            alt="">
                        </img> :
                        <img    
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqPyn7GGPgHZw_rjM52BSBt4vhgq_pzQaig&usqp=CAU"
                            class=" h-full w-1/2 object-cover object-center m-auto border rounded shadow-xl"
                            alt="">
                        </img>
                    }
                       
                </div>
                <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h2 class="font-semibold text-lg leading-tight truncate">{show.title}</h2>
                    <span class="text-sm text-gray-700 uppercase tracking-wide font-semibold">{show.company}</span>
                    <p class="mt-2 h-40 px-3 py-1.5 overflow-scroll border shadow-md rounded">{show.description}</p>
                    <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold ml-4 mt-1">{show.audition_date}
                        <input 
                            class="bg-transparent ml-10" 
                            disabled={true} 
                            value={show.start_time} 
                            type="time">
                        </input> - {}
                        <input 
                            class="bg-transparent" 
                            disabled={true} 
                            value={show.end_time} 
                            type="time">
                        </input>
                    </p>
                    
                </div>
                
                {user.role === "Performer" ? 
                    <Link   to={`/new-audition/${show.id}`} 
                            onClick={() => setCurrentShow(show)}
                            className="px-2 py-1  h-fit rounded hover:bg-gray-300 hover:text-white text-gray-700 border shadow-md" >
                            Audition
                    </Link> : 
                    <>
                    <Link   to={`/shows/${show.id}/auditions`}
                            onClick={() => setCurrentShow(show)}
                            className="px-2 py-1 mr-0.5 h-fit rounded hover:bg-gray-300 hover:text-white text-gray-700 border shadow-md " >
                            Submissions
                    </Link>
                    <Link   to={`/shows/${show.id}`}
                            onClick={() => setCurrentShow(show)}
                            className="px-2 py-1  h-fit rounded hover:bg-gray-300 text-gray-700 border shadow-md" >  
                            ✏️
                    </Link>
                    </>}
                    
            </div>  
    )
}

export default ShowCard;