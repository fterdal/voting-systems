import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useFetch } from "./hooks/useFetch";
import "./App.css";
import axios from "axios";

function BallotList() {
  const [ballots, setBallots] = useState([]);
  const { data, loading, error, execute } = useFetch("/ballot");
  console.log(data);

  async function postBallot() {
    await axios.post("http://localhost:8080/default-ballot");
    execute();
  }

  return (
    <>
      <h1>ballot list!</h1>
      {data ? (
        <ul>
          {data.map((datum: any) => (
            <li key={datum.id}>{datum.id}</li>
          ))}
        </ul>
      ) : (
        <p>Loading</p>
      )}
      <button onClick={postBallot}>Add Ballot</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BallotList />
    </div>
  );
}

export default App;
