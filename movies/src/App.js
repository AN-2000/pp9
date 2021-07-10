import Test1 from "./Test1";
import Test2 from "./Test2";

function App(props) {
  return (
    <div>
      {(props.logged)?<h1>Simple html </h1>:<Test2/>}

    </div>
  );
}

export default App;
