import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return ( <Login onLogin={setUser} /> )

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <h1>Hello {user.username}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;