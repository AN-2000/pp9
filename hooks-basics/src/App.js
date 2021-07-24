import { useState,useEffect } from "react";

import "./style.css";

function App() {

  let [count, setCount] = useState(0); // ye line skip hojati hai
  

  //case 1: works like componentDidMount
    useEffect(()=>{
      console.log("use effect case 1 was executed");
    },[])

    useEffect(()=>{
      console.log("use effect case 2 was executed");
      // setCount(count+1) infinite loop problem 
    })


  console.log("component was rendered");

  return (
    <div>
      <button className="test"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
