import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import "./App.css";

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    
    let f = async () => {
      await firestore.collection("posts").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          tempArr.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setPosts(tempArr);
      });
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

      <input
        placeholder="What's on your mind?"
        type="text"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            //  jobhi likha hua hai wo muje firebase me dalna hai
            let post = e.currentTarget.value;
            firestore.collection("posts").add({ Body: post });
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}

export default App;
