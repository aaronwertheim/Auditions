import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import PerformerPage from "./PerformerPage";
import DirectorPage from "./DirectorPage";
import NewShow from "./NewShow";
import AuditionsList from "./AuditionsList";
import NewAudition from "./NewAudition";
import AuditionsListCasting from "./AuditionsListCasting";
import EditShow from "./EditShow";
import EditAudition from "./EditAudition";
import MessageForm from "./MessageForm";
import MessagesList from "./MessagesList";
import Footer from "./Footer";


function App() {
  const [user, setUser] = useState(null);
  const [currentShow, setCurrentShow] = useState([])
  
  

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function updateUnread(){
      fetch(`/user/${user.id}/`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              unread: 0
          })
      }).then(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        })
      })
  }


  if (!user) return ( <Login onLogin={setUser} /> )

  return (
    <BrowserRouter>
      <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            {user.role === "Performer" ? <PerformerPage user={user} setCurrentShow={setCurrentShow}/> : <DirectorPage user={user} setCurrentShow={setCurrentShow} />}
          </Route>
          <Route exact path="/new-show">
            <NewShow user={user} />
          </Route>
          <Route exact path="/auditions-list">
            <AuditionsList user={user} />
          </Route>
          <Route exact path="/new-audition/:id">
            <NewAudition currentShow={currentShow}/>
          </Route>
          <Route exact path="/shows/:id/auditions">
            <AuditionsListCasting user={user} currentShow={currentShow} />
          </Route>
          <Route exact path={"/shows/:id"}>
            <EditShow currentShow={currentShow} />
          </Route>
          <Route exact path={"/auditions/:id"}>
            <EditAudition />
          </Route>
          <Route exact path={"/send-messages/:id"}>
            <MessageForm user={user} currentShow={currentShow}/>
          </Route>
          <Route exact path={"/messages-list"}>
            <MessagesList user={user} updateUnread={updateUnread}  />
          </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;