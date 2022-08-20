
import { Link } from "react-router-dom";
function AuditionCard({audition}) {

    return (
        <div class="m-5 p-1 rounded shadow-xl w-full bg-white">
            <div class="flex flex-col md:flex-row">
                <div class="flex flex-row justify-around p-4 bg-gray-600 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                    <img src={audition.show.poster_url} alt="Poster" class="rounded"></img>
               </div>
                <div class="pl-4 pt-1 text-gray-700 md:w-3/4">
                    <h1 class="text-2xl font-semibold leading-none uppercase tracking-tight text-gray-700">{audition.show.title} - {audition.desired_role}</h1>
                    <div class="text-gray-700 font-semibold">{audition.show.audition_date + " "}
                        <input  
                            type="time"
                            class=" text-gray-700 ml-2 bg-transparent" 
                            value={audition.audition_time}
                            disabled={true} >
                        </input>
                    </div>
                    <div class="flex flex-col mt-20" > 
                        <div class="pb-0.5">
                            <Link   
                                to={`/auditions/${audition.id}`}
                                class="border border-gray-700 rounded p-0.5 hover:bg-gray-500 hover:text-white mr-4"> 
                                Edit ✏️
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AuditionCard;