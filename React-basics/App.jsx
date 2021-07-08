
class App extends React.Component{

    state = {
        taskData : []
    }

    taskHandler = (value)=>{
      let tempArr =  this.state.taskData
      tempArr.push(value)
      this.setState({taskData:tempArr})
    }

    render(){

    return(
        <div>
            <Input  taskHandlerFunction = {this.taskHandler}/>
            <List tasks = {this.state.taskData}/>
        </div>
    );
}

}


  ReactDOM.render(<div>
      <App/>
  </div>, document.querySelector("#root"));