import { useState, useEffect } from "react";

const App = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292")
      .then((resp) => resp.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <></>
  );
};

export default App;
