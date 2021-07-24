import { useEffect, useState } from "react";
import Display from "./Display";
import Form from "./Form";

function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [theme, setTheme] = useState("light");

  useEffect(() => {
    alert("theme has been changed")
  }, [theme]);

  return (
    <div className="my-container">
      <Display name={name} email={email} phone={phone} theme={theme} />
      <Form
        theme={theme}
        handleName={setName}
        handleEmail={setEmail}
        handlePhone={setPhone}
        handleTheme={setTheme}
      />
    </div>
  );
}

export default App;
