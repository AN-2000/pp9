import { useEffect } from "react";
import { firestore } from "./firebase";

function App() {
  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore.collection("posts").get();


      console.log(querySnapshot);

      querySnapshot.forEach((doc) => {
        console.log({
          id: doc.id,
          data: doc.data(),
        });
      });
    };

    f();
  }, []);

  return <div></div>;
}

export default App;
