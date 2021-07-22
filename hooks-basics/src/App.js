import { useState,useEffect } from "react";

function App() {

  let [count, setCount] = useState(0); // ye line skip hojati hai
  

  //case 1: works like componentDidMount
    useEffect(()=>{
      console.log("use effect was executed");
    },[])


  console.log("component was rendered");

  return (
    <div>
      <button
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
