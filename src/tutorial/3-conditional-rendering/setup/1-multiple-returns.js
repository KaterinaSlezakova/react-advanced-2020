import React, { useState, useEffect } from "react";
const url ="https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        //this additional code gives you info if there are any other errors with url address
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else //includes error 404 url adress not found 
        {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText); // this code gives you info about error inside console
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
      //this code catch just network errors!
        console.log(error);
      });
  }, []);

  // const fetchUser = async () => {
  // setIsLoading(true);
  // try {
  //   const response = await fetch(url);
  //   const user = await response.json();
  //   const { login } = user;
  //   console.log(user);
  //   setIsLoading(false);
  //   setUser(login);
  // } catch (error) {
  //  console.log(error);
  //   setIsError(true);
  // }
  //};

  //useEffect(() => {
  //  fetchUser();
  // }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Big Fat Errrrror..</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
