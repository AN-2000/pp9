class App extends React.Component {
  state = {
    taskData: [],
  };

  taskHandler = (value) => {
    let tempArr = this.state.taskData;
    tempArr.push(value);
    this.setState({ taskData: tempArr });
  };

  removeTask = (task) => {
    let filteredArr = this.state.taskData.filter((el) => {
      return el != task;
    });

    this.setState({ taskData: filteredArr });
  };

  render() {
    return (
      <div>
        <Input taskHandlerFunction={this.taskHandler} />
        <List removeTaskHandler={this.removeTask} tasks={this.state.taskData} />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.querySelector("#root")
);
