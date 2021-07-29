import { useEffect, useState } from "react";
import { firestore } from "./firebase";

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore.collection("posts").get();

      let tempArr = [];

      querySnapshot.forEach((doc) => {
        tempArr.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setPosts(tempArr);
    };

    f();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((el) => (
          <li key={el.id}>{el.data.Body}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
