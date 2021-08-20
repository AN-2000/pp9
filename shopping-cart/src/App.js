import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Preview from "./components/preview";

let App = () => {
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
