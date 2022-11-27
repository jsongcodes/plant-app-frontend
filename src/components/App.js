import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import NewPlant from "./NewPlant";
import PlantPage from "./PlantPage";
import Login from "./Login";

const App = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/plants")
      .then((resp) => resp.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlants(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <PlantPage plants={plants} />
            </Route>
            <Route path="/newplant">
              <NewPlant onAddPlant={handleAddPlants} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
