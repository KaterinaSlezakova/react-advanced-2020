import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const checkSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    console.log("useEffect")
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    }
  });
  console.log("render");

  return (
    <>
      <h2>Window</h2>
      <h3>width: {width} px</h3>
      <h3>height: {height} px</h3>
    </>
  );
};

export default UseEffectCleanup;
