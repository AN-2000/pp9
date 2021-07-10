import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";

function App(props) {
  return (
    <React.Fragment>
      <Navbar />

      <div className="row">
        <div className="col-2 p-4">
          <Category />
        </div>

        <div className="col-10 p-4">
          <div className="row">
            <div className="col-3">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
