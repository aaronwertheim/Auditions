import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Headshot() {
    const [headshot, setHeadshot] = useState()
    const {id} = useParams()
    useEffect(() => {
        fetch(`/auditions/${id}`)
        .then(r => r.json())
        .then(audition => setHeadshot(audition.file_url))
    },[])


    return (
        <img src={headshot}></img>
    )
}

export default Headshot;