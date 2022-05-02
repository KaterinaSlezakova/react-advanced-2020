import React, { useState } from "react";

const ErrorExample = () => {
  const [title,setTitle]= useState ("Random title");

  const handleClick = () => {
    setTitle("New title");
  };

  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
