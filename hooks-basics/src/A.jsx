import { createContext, useState } from "react";
import B from "./B";

//lamen terms -  context ek jagah hai to store some data to pass to child props in any level of component tree

let someContext = createContext();

function A() {
  let [name, setName] = useState("Jack");

  return (
    <someContext.Provider value={name}>
      <B />
    </someContext.Provider>
  );
}

export default A;

export { someContext };
