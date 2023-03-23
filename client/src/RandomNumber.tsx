import { useEffect, useState } from "react";
import axios from "axios";

function logit(it) {
  console.log(it);
}

export function RandomNumber() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const request = axios.get("http://localhost:8080/random");
    request
      .then((response) => {
        console.log(response);
        setNumber(response.data);
      })
      .catch(logit);
  }, []);

  const numberMessage = <p>Your number today is {number}</p>;

  return (
    <>
      <h1>Hello Number!</h1>
      {number ? numberMessage : <p> </p>}
    </>
  );
}
