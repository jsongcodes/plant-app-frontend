import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import NewPlant from "./NewPlant";
import PastPlants from "./PastPlants";
import Home from "./Home";

const App = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292")
      .then((resp) => resp.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/plants">
              <PastPlants plants={plants}/>
            </Route>
            <Route path="/newplant">
              <NewPlant onAddPlant={handleAddPlants} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
