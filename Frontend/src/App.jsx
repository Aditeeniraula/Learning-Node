import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useState(() =>
    axios
      .get("")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log("Error");
      })
  );
  return (
    <>
      <h1>Lame Jokes</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>;
      })}
    </>
  );
}

export default App;
