import React from "react";

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
    return <h1>Main Page</h1>;
  }
}

export default MainPage;
