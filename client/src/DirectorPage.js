import { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function DirectorPage({user, setCurrentShow}) {
    const [shows, setShows] = useState([]);
    const showsToDisplay = shows.filter(show => show.user_id === user.id)

    useEffect(() => {
        fetch("/shows")
        .then(r => r.json())
        .then(showsArray => setShows(showsArray))
      },[]);

   if (showsToDisplay.length === 0)  return (
        <div class="text-center text-gray-800 uppercase text-4xl font-semibold mt-4">
            You do not currently have any casting calls
        </div>
    )  
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24  px-4">
                <CarouselProvider className="" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={showsToDisplay.length} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                  {shows.map(show => (  
                                    <ShowCard key={show.id} show={show} user={user} setCurrentShow={setCurrentShow}/> 
                                    ))}   
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default DirectorPage;