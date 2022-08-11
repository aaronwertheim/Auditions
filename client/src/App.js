import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import PerformerPage from "./PerformerPage";
import DirectorPage from "./DirectorPage";
import NewShow from "./NewShow";
import AuditionsList from "./AuditionsList";

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return ( <Login onLogin={setUser} /> )

  return (
    <BrowserRouter>
        <NavBar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            {user.role === "Performer" ? <PerformerPage user={user} /> : <DirectorPage user={user} />}
          </Route>
          <Route exact path="/new-show">
            <NewShow user={user} />
          </Route>
          <Route exact path="/auditions-list">
            <AuditionsList />
          </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;