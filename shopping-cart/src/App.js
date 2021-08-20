import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Preview from "./components/preview";
import { useSelector } from "react-redux";

let App = () => {
  let state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/preview/:id">
            <Preview />
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
