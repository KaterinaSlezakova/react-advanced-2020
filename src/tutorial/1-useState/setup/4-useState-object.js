import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Adam",
    age: 30,
    message: "Hello from Adam",
  });

  const [name, setName] = useState("Thomas");
  const [age, setAge] = useState(20);
  const [message, setMessage] = useState("Thomas is good guy");

  const changeMessage = () => {
    //setPerson({ ...person, message: "Adam has changed a message" });
    setMessage("Thomas has changed a message")
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
