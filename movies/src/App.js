import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
  state = {
    noOfMovies: 0,
  };

  receiveMovieData = (number) => {
    this.setState({ noOfMovies: number });
  };

  render() {
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
                <Search noOfMovies={this.state.noOfMovies} />
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <Table sendData={this.receiveMovieData} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
