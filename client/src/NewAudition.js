import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function NewAudition({currentShow}) {

    
    const [fullName, setFullName] = useState("")
    const [auditionTime, setAuditionTime] = useState()
    const [desiredRole, setDesiredRole] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/auditions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            show_id: currentShow.id,
            full_name: fullName,
            desired_role: desiredRole,
            audition_time: auditionTime,
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            history.push("/auditions-list");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    

    return (
        <section class="h-full gradient-form bg-gray-200 md:h-screen">
            <div class="container py-12 px-6 h-full">
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="xl:w-10/12">
                        <div class="block bg-white shadow-lg rounded-lg">
                            <div class="lg:flex lg:flex-wrap g-0">
                                <div class="lg:w-6/12 px-4 md:px-0">
                                    <div class="md:p-12 md:mx-6">
                                        <form onSubmit={handleSubmit}>
                                            <div class="mb-4">
                                                <input  placeholder="Full Name" 
                                                        value={fullName} 
                                                        onChange={(e) => setFullName(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <input  value={auditionTime} 
                                                        type="time" 
                                                        onChange={(e) => setAuditionTime(e.target.value)} 
                                                        min="09:00" 
                                                        max="17:00"  
                                                        step="300" 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">                                                
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <input  placeholder="Desired Role" 
                                                        value={desiredRole} 
                                                        onChange={(e) => setDesiredRole(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                
                                            </div>
                                            <div class="text-center pt-1 mb-4 pb-1">
                                                <button class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Submit</button>
                                            </div>
                                            <div class="text-center pt-1 mb-12 pb-1">
                                                <Link to="/" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Cancel</Link>
                                            </div>
                                        </form>
                                        <div>
                                            {errors.map((err) => (
                                            <div key={err}>{err}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-black lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                        <h4 class="text-xl font-semibold mb-6">Audition Form</h4>
                                        <p class="text-sm">Suit the action to the word, the word to the action; with this special observance, that you o'erstep not the modesty of nature: for anything so overdone is from the purpose of playing, whose end, both at the first and now, was and is, to hold, as 'twere, the mirror up to nature; to show Virtue her own feature, scorn her own image, and the very age and body of the time his form and pressure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewAudition;