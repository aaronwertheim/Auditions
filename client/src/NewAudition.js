import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";


function NewAudition({currentShow}) {

    const [auditionTime, setAuditionTime] = useState()
    const [desiredRole, setDesiredRole] = useState("")
    const [headshot, setHeadshot] = useState("")
    const [resume, setResume] = useState("")
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const [show, setShow] = useState(currentShow); 
    const {id} = useParams() 
    useEffect(() => {
        fetch(`/shows/${id}`)
        .then(r => r.json())
        .then(array =>setShow(array))
    },[id])

        const handleSubmit = (e) => {
           e.preventDefault()
           if (!headshot) return alert('Please Add Headshot') 
           if (!resume) return alert('Please Add Resume')
           const formData = new FormData()
           formData.append('audition[show_id]', show.id)
           formData.append('audition[audition_time]', e.target.auditiontime.value)
           formData.append('audition[desired_role]', e.target.desiredrole.value)
           formData.append('audition[headshot]', e.target.fileInput.files[0])
           formData.append('audition[resume]', e.target.pdfInput.files[0])
           fetch('/auditions', {
              method: "POST",
              body: formData
           }).then((r) => {
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
                                                <input  value={auditionTime} 
                                                        type="text"
                                                        name="auditiontime"
                                                        placeholder={"Time - " + show.timeslot + " Minute Increments"} 
                                                        onFocus={(e) => e.target.type = "time"}
                                                        onChange={(e) => setAuditionTime(e.target.value)} 
                                                        min={show.start_time} 
                                                        max={show.end_time}  
                                                        step={show.timeslot * 60} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">                                                
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <input  placeholder="Desired Role" 
                                                        name="desiredrole"
                                                        value={desiredRole} 
                                                        onChange={(e) => setDesiredRole(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <input  type="text"
                                                        placeholder="Upload Headshot"
                                                        name="fileInput"
                                                        accept="image/jpeg"
                                                        value={headshot} 
                                                        onChange={(e) => setHeadshot(e.target.value)} 
                                                        onFocus={(e) => e.target.type = "file"}
                                                        class="cursor-pointer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <input  type="text"
                                                        placeholder="Upload Resume"
                                                        name="pdfInput"
                                                        accept="application/pdf"
                                                        value={resume} 
                                                        onChange={(e) => setResume(e.target.value)} 
                                                        onFocus={(e) => e.target.type = "file"}
                                                        class="cursor-pointer form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="text-center pt-1 mb-4 pb-1">
                                                <button class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Submit</button>
                                            </div>
                                            <div class="text-center pt-1 mb-12 pb-1">
                                                <Link to="/" class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Cancel</Link>
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
                                    <h4 class="text-xl font-semibold mb-2 underline">Submit Audition for:</h4>
                                        <h4 class="text-lg font-semibold">{show.title}</h4>
                                        <h4 class="font-semibold">{show.audition_date}
                                            <input 
                                                type="time" 
                                                value={show.start_time} 
                                                disabled={true} 
                                                class="bg-transparent ml-1.5">
                                            </input>-
                                            <input 
                                                type="time" 
                                                value={show.end_time} 
                                                disabled={true} 
                                                class="bg-transparent">
                                            </input>
                                        </h4> 
                                        <p class="text-sm mt-10">{show.description}</p>
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