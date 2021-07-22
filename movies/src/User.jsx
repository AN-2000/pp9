import React from "react";

import { Link, withRouter } from "react-router-dom";

class User extends React.Component {
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
    let reqUser = this.state.usersData.find((el) => {
      return el.id == this.props.match.params.id;
    });

    if (!reqUser) return <div>loading...</div>;

    return (
      <div>
        <Link to="/">
          <button>Go back</button>
        </Link>
        <h1>{reqUser.name}</h1>
        <h2>Age: {reqUser.age}</h2>
        <h2>Email: {reqUser.email}</h2>
      </div>
    );
  }
}

export default withRouter(User);
