import { someContext } from "./A";
import {useContext} from "react"

function D() {

    let name = useContext(someContext)


  return (
      <h1>{`${name} `}</h1>
  );
}

export default D;
