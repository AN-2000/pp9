import { createContext, useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./AuthProvider";
let userContext = createContext();

function App() {
  let [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <AuthProvider>
          <userContext.Provider value={user}>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Login handleUser={setUser} />
              </Route>
            </Switch>
          </userContext.Provider>
        </AuthProvider>
      </Router>
    </>
  );
}

export { userContext };

export default App;
