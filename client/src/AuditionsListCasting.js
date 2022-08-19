import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function AuditionsListCasting({currentShow}) {
    
    const [auditions, setAuditions] = useState(currentShow.auditions); 
    const [show, setShow] = useState([])
    const {id} = useParams() 

    useEffect(() => {
        fetch(`/shows/${id}/auditions`)
        .then(r => r.json())
        .then(array =>setAuditions(array))
    },[])

    useEffect(() => {
        fetch(`/shows/${id}`)
        .then(r => r.json())
        .then(array => setShow(array))
    },[])
       
    return (
        <div class="container mx-auto py-10 flex justify-center">
            <div class=" pl-4 uppercase  h-full flex flex-col">
                <div class="bg-white text-gray-500 font-bold px-5 py-3 shadow border-b border-gray-300">
                    Auditions for: {show.title}
                </div>
                    <div class="w-full h-full overflow-auto shadow bg-white pb-10">
                        <table class="w-full">
                            <tbody class="">
                                {auditions?.map(audition => (
                                    <tr key={audition.id }class="relative transform scale-100 text-sm py-1 border-b-2 border-blue-100 cursor-default bg-blue-500 bg-opacity-25">
                                        <td class="pl-5 pr-3 py-2.5 whitespace-no-wrap">
                                            <div class="text-gray-400">{show.audition_date}</div>
                                            <input class="bg-transparent" type="time" disabled={true} value={audition.audition_time}></input>
                                        </td>

                                        <td class="px-2 py-2.5 whitespace-no-wrap">
                                            <div class="leading-5 text-gray-500 font-medium">{audition.user.first_name + " " + audition.user.last_name} - 
                                            <Link to={`/headshot/${audition.id}`}> 
                                                <a class="text-blue-500 hover:underline text-xs" href="#"> headshot -</a> 
                                            </Link> 
                                              
                                                <a class="text-blue-500 hover:underline text-xs" href={audition.resume_url} download> resume</a>
                                                
                                            </div>
                                            <div class="leading-5 text-gray-900">Role: {audition.desired_role}</div>
                                        </td>
                                        <div></div>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )      
}

export default AuditionsListCasting;