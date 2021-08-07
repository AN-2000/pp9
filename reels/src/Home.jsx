import { Redirect } from "react-router-dom";
import { auth, storage } from "./firebase";
import { userContext } from "./App";
import { useContext } from "react";

import VideoCard from "./VideoCard";
import "./Home.css";

let Home = () => {
  let value = useContext(userContext);

  return (
    <div>
      {value ? (
        <>
          <div className="posts-container">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
          <button
            className="logout-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>

          <input
            onChange={(e) => {
              //get file name size and type 
              let { name, size, type } = e.target.files[0];
              //store the selected file so that we can upload it later on 
              let file = e.target.files[0];
              console.log(name);
              //convert the file size into mb
              size = size / 1000000;
              console.log(type);

              //get file type
              type = type.split("/")[0];


              //checks

              //  if(type!="video"){
              //    alert("Please upload a video")
              //  }else if(size>10){
              //    alert("File is too big")
              //  }else{

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
                  console.log(url);
                });
                console.log(p);
              };

              //using the firebase storage object we are getting reference of a file location
              //in our case posts/userId/fileName and uploading our file to that location
              let uploadtask = storage
                .ref(`/posts/${value.uid}/${name}`)
                .put(file);

              // the upload method gives us uploadTask which can be used to set up
              //state_changed event
              //this takes 3 callbacks 
              uploadtask.on("state_changed", f1, f2, f3);

              //  }

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
