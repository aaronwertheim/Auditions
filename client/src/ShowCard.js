import { Link } from "react-router-dom";
import {  Slide } from "pure-react-carousel";


function ShowCard({show, user, setCurrentShow}) {
        return (
                <Slide >
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto ">
                        <img src={show.poster_url} alt="Poster" className="object-cover object-center w-full pt-32 pb-32" />
                        <div className="bg-gray-800 bg-opacity-30 absolute rounded w-full h-full px-2 pt-4 shadow-lg ">
                            <h2 className="text-lg font-semibold leading-4 lg:leading-5 text-white absolute">{show.title}</h2>
                            <div className="flex h-full items-end pb-6 ">
                                <div className="font-semibold leading-5 lg:leading-6 text-white  ">
                                    <h3>{show.audition_date}</h3>
                                    <input 
                                        className="bg-transparent mt-2" 
                                        type="time" 
                                        value={show.start_time} 
                                        disabled={true}>
                                    </input>{"-"}
                                    <input 
                                        className="bg-transparent mb-2" 
                                        type="time" value={show.end_time} 
                                        disabled={true}>
                                    </input> 
                                    {user.role === "Performer" ? 
                                        <Link   to={`/new-audition/${show.id}`} 
                                                onClick={() => setCurrentShow(show)}
                                                className=" px-1 h-fit rounded hover:bg-gray-700 hover:text-white text-gray-700 bg-white border shadow-md" >
                                                Audition / Details
                                        </Link> : 
                                    <>
                                        <Link   to={`/shows/${show.id}/auditions`}
                                                onClick={() => setCurrentShow(show)}
                                                className="px-1 mr-2 h-fit rounded hover:bg-gray-700 hover:text-white text-gray-700 bg-white  border shadow-md " >
                                                Submissions
                                        </Link>
                                        <Link   to={`/shows/${show.id}`}
                                                onClick={() => setCurrentShow(show)}
                                                className="px-1 h-fit rounded hover:bg-gray-700 hover:text-white text-gray-700 bg-white border shadow-md" >  
                                                ✏️
                                        </Link>
                                    </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
    )
}

export default ShowCard;