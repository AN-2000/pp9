import { useEffect, useState } from "react";
import "./App.css"
function App() {
  let [activities, setActivities] = useState([]);

  useEffect(() => {
    //yhapr logic hoga msg display krne ka

    if (activities.length <= 0) return;

    let p = document.createElement("p");
    p.innerText = "New Activity was added";
    p.classList.add("msg");
    document.querySelector("body").append(p);

    setTimeout(() => {
      p.remove();
    }, 2000);
    
  }, [activities]);

  return (
    <div>
      <button
        onClick={async () => {
          let res = await fetch("https://www.boredapi.com/api/activity");
          let json = await res.json();
          let newActivity = json.activity;

          setActivities([...activities, newActivity]);
        }}
      >
        New Activity
      </button>

      <ul>
        {activities.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
