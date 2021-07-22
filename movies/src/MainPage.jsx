import React from "react";

import { Link } from "react-router-dom";

class MainPage extends React.Component {
  // localhost:3000/user.json

  state = { usersData: [] };

  componentDidMount() {
    fetch("/user.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          usersData: json,
        });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.usersData.map((el) => (
            <li key={el.id}>
              <Link to={`/user/${el.id}`} >{el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MainPage;
