import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button
        type="button"
        className="btn"
        onClick={() =>
          text === "random title"
            ? setText("new title")
            : setText("random title")
        }
      >
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
