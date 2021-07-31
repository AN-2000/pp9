import { useEffect } from "react";
import { firestore } from "./firebase";

function App() {
  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore
        .collection("posts")
        .limit(5)
        .orderBy("index", "asc")
        .get();
      querySnapshot.forEach((doc) => console.log(doc.data()));
    };

    f();
  }, []);

  return <div></div>;
}

export default App;
