import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewAudition({user, show}) {

    const [preferedTime, setPerferedTime] = useState("")
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
            prefered_time: preferedTime,
            show_id: show.id,
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
        <form onSubmit={handleSubmit}>
            <input placeholder="Preferred timeslot" value={preferedTime} onChange={(e) => setPerferedTime(e.target.value)}></input>
            <button>Submit</button>
        </form>
    )
}

export default NewAudition;