import { Link, Redirect } from "react-router-dom";
import { auth, storage, firestore } from "./firebase";
import { AuthContext } from "./AuthProvider";
import { useContext, useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import "./Home.css";

let Home = () => {
  let value = useContext(AuthContext);

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsubscription = firestore
      .collection("posts")
      .onSnapshot((querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });

    // console.log(posts);

    //unsub from listening to changes on posts collection when home component is unmounted
    return () => {
      unsubscription();
    };
  }, []);

  return (
    <div>
      {value ? (
        <>
          <div className="posts-container">
            {posts.map((post, index) => {
              return <VideoCard key={index} post={post} />;
            })}
          </div>
          <button
            className="logout-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>

          <Link to="/profile">
            <button id="profile">Profile</button>
          </Link>

          <input
            //whenever click on input file tag set its value to null so that even if we select same file the tag will feel we have done some changes and it will call onChange
            onClick={(e) => {
              e.target.value = null;
            }}
            onChange={(e) => {
              if (!e.target.files[0]) return;

              //get file name size and type
              let { name, size, type } = e.target.files[0];
              //store the selected file so that we can upload it later on
              let file = e.target.files[0];
              //convert the file size into mb
              size = size / 1000000;

              //get file type
              type = type.split("/")[0];

              //checks

              console.log(size);
              console.log(type);

              if (type !== "video") {
                alert("Please upload a video");
              } else if (size > 10) {
                alert("File is too big");
              } else {
                console.log("paucha");
                //f1 function passed to state_changed event for upload progress
                let f1 = (snapshot) => {
                  console.log(snapshot.bytesTransferred);
                  console.log(snapshot.totalBytes);
                };
                //f2 function passed to state_changed event for error handling
                let f2 = (error) => {
                  console.log(error);
                };

                //f3 function passed to state_changed event which executes when file is uploaded
                //so that we can get the uploaded file url
                let f3 = () => {
                  //getDownloadURL method is used to generate the url, it gives a promise
                  let p = uploadtask.snapshot.ref.getDownloadURL();
                  p.then((url) => {
                    firestore.collection("posts").add({
                      username: value.displayName,
                      url,
                      likes: 0,
                      comments: [],
                    });
                  });
                };

                console.log(`/posts/${value.uid}/${Date.now() + name}`);

                //using the firebase storage object we are getting reference of a file location
                //in our case posts/userId/fileName and uploading our file to that location
                let uploadtask = storage
                  //added current date to filename so that same file copies can be store to firebase with out overriding
                  .ref(`/posts/${value.uid}/${Date.now() + name}`)
                  .put(file);

                // the upload method gives us uploadTask which can be used to set up
                //state_changed event
                //this takes 3 callbacks
                uploadtask.on("state_changed", f1, f2, f3);
              }

              // upload
            }}
            className="upload-btn"
            type="file"
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;
