import {someContext} from "./A";

function D(){
    return (
       <someContext.Consumer>
           {(obj)=>{
               return (<h1>{obj.name+" "+obj.email}</h1>)
           }}
       </someContext.Consumer>
    );
}

export default D;