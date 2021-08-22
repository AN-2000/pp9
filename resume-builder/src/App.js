import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions";
let App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      dispatch(setUser(user));

      if (user) {
        let { uid, email } = user;

        let docRef = firestore.collection("users").doc(uid);
        let doc = await docRef.get();
        if (!doc.exists) {
          docRef.set({ email });
        }
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
