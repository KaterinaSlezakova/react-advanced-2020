import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");

    document.title = `${value} new messages`;
  }, [value]);

  useEffect(() => {
    alert("Hi there!");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        decrease
      </button>
    </>
  );
};

export default UseEffectBasics;
