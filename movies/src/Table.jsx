import React from "react";

class Table extends React.Component {
  state = {
    allMovies: [
      {
        title: "Terminator",
        genre: "Action",
        stock: "2",
        rate: "2.5",
      },
      {
        title: "Die Hard",
        genre: "Action",
        stock: "3",
        rate: "2.5",
      },
      {
        title: "Get Out",
        genre: "Thriller",
        stock: "1",
        rate: "3.5",
      },
      {
        title: "Trip to Italy",
        genre: "Comedy",
        stock: "5",
        rate: "1.5",
      },
    ],
  };

  render() {
    let numberOfPages = Math.ceil(this.state.allMovies.length / 5);
    let arr = [];
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }

    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.allMovies.map((el) => {
              return (
                <tr>
                  <td>{el.title}</td>
                  <td>{el.genre}</td>
                  <td>{el.stock}</td>
                  <td>{el.rate}</td>
                  <td>Like</td>
                  <td>
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <nav>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>

            {arr.map(function (el) {
              return (
                <li class="page-item">
                  <a class="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}

            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Table;
