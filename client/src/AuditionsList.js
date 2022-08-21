import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AuditionsList({user}) {

    const [auditions, setAuditions] = useState([]);
    
    
    useEffect(() => {
        fetch("/auditions")
        .then(r => r.json())
        .then(auditionsArray => setAuditions(auditionsArray) )
      },[])
      

    if (auditions.length === 0) return (<div class="text-center font-semibold uppercase text-4xl mt-20">You currently have no upcoming auditions</div>)
    return (
        <div class="container mx-auto py-10 flex justify-center">
        <div class=" pl-4 uppercase  h-full flex flex-col">
            <div class="bg-white text-gray-500 font-bold px-5 py-3 shadow border-b border-gray-300">
                Auditions for: {user.first_name + " " + user.last_name}
            </div>
                <div class="w-full h-full overflow-auto shadow bg-white pb-10">
                    <table class="w-full">
                        <tbody class="">
                            {auditions?.map(audition => (
                                <tr key={audition.id }class="relative transform scale-100 text-sm py-1 border-b-2 border-blue-100 cursor-default bg-blue-500 bg-opacity-25">
                                    <td class="pl-5 pr-3 py-2.5 whitespace-no-wrap font-semibold text-right">
                                        <div class="text-gray-400">{audition.show.audition_date}</div>
                                        <input class="bg-transparent" type="time" disabled={true} value={audition.audition_time}></input>
                                        <div class="text-blue-500 hover:underline text-xs">
                                            <Link to={`/auditions/${audition.id}`}>Edit</Link>
                                        </div>
                                    </td>
                                    <td class="px-2 py-2.5 whitespace-no-wrap">
                                        <div class="leading-5 text-gray-500 font-medium">{audition.show.company} - {audition.show.title}
                                            <div class="leading-5 text-gray-900">Role: {audition.desired_role}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
    )
}

export default AuditionsList;