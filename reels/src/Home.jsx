import { auth } from "./firebase";

let Home = (props) => {
  return (
    <div>
      <h1>{props.user.displayName}</h1>
      <p>Email: {props.user.email}</p>
      <button onClick={()=>{
          auth.signOut()
      }}>Logout</button>
    </div>
  );
};

export default Home;
