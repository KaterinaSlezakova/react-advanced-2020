import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  function removeItem (id) {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <React.Fragment>
            <h2 key={id} className="item">
              {name}
            </h2>
            <button className="btn btn-danger" onClick={() => removeItem(id)}>
              Remove
            </button>
          </React.Fragment>
        );
      })}
      <div>
        <button type="button" className="btn" onClick={() => setPeople([])}>
          Clear list
        </button>
      </div>
      <br />
    </>
  );
};

export default UseStateArray;
