import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Cart from "./components/cart";
import Navbar from "./components/navbar";
import Product from "./components/product";

let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product">
            <Product />
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
