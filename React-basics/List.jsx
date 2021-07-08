class List extends React.Component{
    state = {
        taskData:[
            "temp task v1",
            "temp task v2",
            "temp task v3",
            "temp task v4",
            "temp task v5",
        ],
    }

    render(){
        return(
            <ul>
                {
                    this.state.taskData.map((el)=>{
                        return <ListItem taskVal = {el} />
                    })

                }
            </ul>
        )
    }

}