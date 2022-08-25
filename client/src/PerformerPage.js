import ShowCard from "./ShowCard";
import { useEffect, useState } from "react";
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function PerformerPage({user, setCurrentShow}) {
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        fetch("/shows")
        .then(r => r.json())
        .then(showsArray => setShows(showsArray))
      },[]);

      return (
        <div className="container mx-auto">
             <div className="mt-0.5 py-6 px-6 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoy3Gqz3Fiht22bFo40PBdJlJ_Ai6tOYzwA&usqp=CAU')] ">
                <div className="text-white">
                    <h1 className="text-4xl font-semibold"> {"Hello " + user.first_name + " " + user.last_name}</h1>
                    <p className="text-lg  mt-2">
                        <span className="font-bold">All Open Casting Calls:</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={shows.length} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 bg-gray-800 ring-2 ring-gray-800 ring-offset-2 hover:animate-ping  cursor-pointer" id="prev">
                            <svg width={14} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mb-20 mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                  {shows.map((show, index) => (  
                                    <ShowCard index={index} key={show.id} show={show} user={user} setCurrentShow={setCurrentShow}/> 
                                    ))}   
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 h bg-gray-800 ring-2 ring-gray-800 ring-offset-2 hover:animate-ping" id="next">
                            <svg width={14} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default PerformerPage;