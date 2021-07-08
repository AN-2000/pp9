console.log(React.Component);

class Input extends React.Component{
    state = {task:""}

    render(){
        return(
            <div>
                <input type="text" value={this.state.task}></input>
                <button>Submit</button>
            </div>
        );
    }

}

