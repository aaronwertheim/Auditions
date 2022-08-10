import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";

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
          <Route path="/">
            <h1 className="text-3xl font-bold underline">Hello {user.username}</h1>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;