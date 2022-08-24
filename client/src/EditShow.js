import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";


function EditShow({currentShow}) {

    const [show, setShow] = useState(currentShow); 
    const {id} = useParams() 
    useEffect(() => {
        fetch(`/shows/${id}`)
        .then(r => r.json())
        .then(array =>setShow(array))
    },[id])

    const [newTitle, setNewTitle] = useState(show.title)
    const [newDate, setNewDate] = useState(show.audition_date)
    const [newPosterUrl, setNewPosterUrl] = useState(show.poster_url)
    const [newCompany, setNewCompany] = useState(show.company)
    const [newDescription, setNewDescription] = useState(show.description)
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleUpdate(e) {
        e.preventDefault();
        fetch(`/shows/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            title: newTitle,
            poster_url: newPosterUrl,
            company: newCompany,
            description: newDescription,
            audition_date: newDate,
        })
        }).then((r) => {
            if (r.ok) {
              history.push("/");
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
        });
    }

        function handleDelete() {
            fetch(`/shows/${id}`, {
              method: "DELETE",
            }).then((r) => {
                if (r.ok) {
                  history.push("/");
                } else {
                  r.json().then((err) => setErrors(err.errors));
                }
            });
        }
    
        return (
            <section class="h-full gradient-form  md:h-screen">
                <div class="container py-12 px-6 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="xl:w-10/12">
                            <div class="block bg-white shadow-lg rounded-lg">
                                <div class="lg:flex lg:flex-wrap g-0">
                                    <div class="lg:w-6/12 px-4 md:px-0">
                                        <div class="md:p-12 md:mx-6">
                                            <form onSubmit={handleUpdate}>
                                                <div class="mb-4">
                                                    <input  
                                                        defaultValue={show.title} 
                                                        onChange={(e) => setNewTitle(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                    </input>
                                                </div>
                                                <div class="mb-4">
                                                    <input  
                                                        type="date"
                                                        defaultValue={show.audition_date} 
                                                        onChange={(e) => setNewDate(e.target.value)}
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                    </input>
                                                </div>
                                                <div class="mb-4">
                                                    <input   
                                                        defaultValue={show.poster_url} 
                                                        onChange={(e) => setNewPosterUrl(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                    </input>
                                                </div>
                                                <div class="mb-4">
                                                    <input  
                                                        defaultValue={show.company} 
                                                        onChange={(e) => setNewCompany(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                    </input>
                                                </div>
                                                <div class="mb-4">
                                                    <textarea    
                                                        defaultValue={show.description} 
                                                        onChange={(e) => setNewDescription(e.target.value)} 
                                                        class="form-control block w-full h-40 resize-none px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none">
                                                    </textarea>
                                                </div>
                                                <div class="text-center pt-1 mb-4">
                                                    <button 
                                                        type="submit" 
                                                        class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">
                                                        Update
                                                    </button>
                                                </div>
                                                <div class="text-center py-1">
                                                    <button 
                                                        type="submit" 
                                                        class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                        onClick={handleDelete}>
                                                        Remove this casting
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-black">
                                        <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                            <h4 class="text-xl font-semibold mb-6 underline">Edit Casting Info for {show.title}</h4>
                                            <p class="text-sm italic">I have heard That guilty creatures sitting at a play, Have, by the very cunning of the scene, Been struck so to the soul that presently They have proclaim'd their malefactions; For murder, though it have no tongue, will speak. With most miraculous organ. The play's the thing Wherein I'll catch the conscience of the king.</p>
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

export default EditShow;