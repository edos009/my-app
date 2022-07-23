import "./App.css";
import { useState } from "react";

function App() {
  const [fname, setFname] = useState("Edurd");
  const [lname, setLname] = useState("Tiutiunnyk");
  const [age, setAge] = useState(26);
  const [isBan, setIsBan] = useState(false);

  const handlerChangeData = () => {
    setLname(prompt("Input Lname"));
    setFname(prompt("Input Fname"));
    setAge(Number(prompt("Input Age")));
  };

  const handlerIsBan = () => {
    setIsBan(!isBan);
  };

  const handlerPlusAge = () => {
    setAge(age + 1);
  };

  const handlerMinusAge = () => {
    if (age <= 0) {
      return;
    }
    setAge(age - 1);
  };

  return (
    <>
      <p>
        {lname} {fname} {age}
      </p>
      <p style={{ backgroundColor: isBan ? "red" : "green", color: "white" }}>
        {lname} {fname} {isBan ? "is baned" : "is unbaned"}
      </p>
      <button onClick={handlerChangeData}>Change Data</button>
      <button onClick={handlerIsBan}>{isBan ? "Unban" : "Ban"}</button>
      <button className="disableBtn" onClick={handlerPlusAge} disabled={isBan}>
        +
      </button>
      <button className="disableBtn" onClick={handlerMinusAge} disabled={isBan}>
        -
      </button>
    </>
  );
}

export default App;
