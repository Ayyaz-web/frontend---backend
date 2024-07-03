import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-cyan-400 w-screen h-screen items-center text-center flex flex-col justify-center gap-4">
      <div className="bg-pink-300 p-4 rounded-2xl">
        This is my First full stack project
      </div>
      <div className="bg-blue-500 p-3 rounded-2xl">JOKES: {jokes.length}</div>
      {jokes.map((joke, index) => (
          <div key={index} className="flex gap-4 bg-yellow-100 p-2 rounded-md">
            <p>{joke.id}.</p>
            <h1>{joke.title}</h1>
            <p>{joke.description}</p>
          </div>
      ))}
    </div>
  );
}

export default App;
