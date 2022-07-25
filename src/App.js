import "./App.css";
import React, { useState } from "react";

const App = (props) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");

  const getHTML = (text1) => {
    check1 ? setResult1("") : setResult1(text1);
  };

  const getCSS = (text2) => {
    check2 ? setResult2("") : setResult2(text2);
  };

  const getJS = (text3) => {
    check3 ? setResult3("") : setResult3(text3);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          onChange={(e) => {
            const text1 = e.target.parentNode.innerText;
            setCheck1(!check1);
            getHTML(text1);
          }}
        />
        HTML
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={(e) => {
            const text2 = e.target.parentNode.innerText;
            setCheck2(!check2);
            getCSS(text2);
          }}
        />
        CSS
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={(e) => {
            const text3 = e.target.parentNode.innerText;
            setCheck3(!check3);
            getJS(text3);
          }}
        />
        JS
      </label>
      <p>{result1}</p>
      <p>{result2}</p>
      <p>{result3}</p>
    </>
  );
};

export default App;
