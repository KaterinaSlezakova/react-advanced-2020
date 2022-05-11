import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("ahoj");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  //const temperature = 40;
  // console.log(temperature);

  return (
    <>
      <h1>{text || "marta"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {isError && <h1>Error..</h1>}
      {isError ? (
        <p>There is error...</p>
      ) : (
        <div>
          <h2>There is no errors...</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
