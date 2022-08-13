import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewShow({user}) {
    const [title, setTitle] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    const [company, setCompany] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();


    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/shows", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            poster_url: posterUrl,
            company: company,
            description: description,
            user_id: user.id,
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            history.push("/");
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
                                                <input  placeholder="Title" 
                                                        value={title} 
                                                        onChange={(e) => setTitle(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <input  placeholder="Poster link" 
                                                        value={posterUrl} 
                                                        onChange={(e) => setPosterUrl(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <input  placeholder="Company" 
                                                        value={company} 
                                                        onChange={(e) => setCompany(e.target.value)} 
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                </input>
                                            </div>
                                            <div class="mb-4">
                                                <textarea   placeholder="Description" 
                                                            value={description} 
                                                            onChange={(e) => setDescription(e.target.value)} 
                                                            class="form-control block w-full h-40 resize-none px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                                </textarea>
                                            </div>
                                            <div class="text-center pt-1 mb-12 pb-1">
                                                <button type="submit" 
                                                        class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">
                                                        Submit
                                                </button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                                <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-black">
                                    <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                                        <h4 class="text-xl font-semibold mb-6">Submit Your Show</h4>
                                        <p class="text-sm">Please fill out all information with as much detail as possible.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default NewShow;