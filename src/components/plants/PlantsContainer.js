import { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import NewPlantForm from "./NewPlantForm";
import PlantsList from "./PlantsList";
import PlantsToolBar from "./PlantsToolBar";
import PlantDetail from "./PlantDetail";

const PlantsContainer = () => {
  const history = useHistory();
  const location = useLocation();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/plants`)
      .then((resp) => resp.json())
      .then((plants) => setPlants(plants));
  }, []);

  const handleDelete = (plantId) => {
    if (window.confirm("Are you sure you want to delete this plant?")) {
      fetch(`http://localhost:9292/plants/${plantId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deletedPlant) => {
          setPlants(plants.filter((plant) => plant.id !== deletedPlant.id));
          if (location.pathname !== "/plants") {
            history.push("/plants");
          }
        });
    }
  };

  const addPlant = (formData) => {
    fetch(`${process.env.REACT_APP_API_URL}/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((plant) => {
        setPlants(plants.concat(plant));
        history.push(`/plants/${plant.id}`);
      });
  };


  return (
    <div>
      <PlantsToolBar />
      <Switch>
        <Route exact path="/plants">
          <PlantsList plants={plants} handleDelete={handleDelete} />
        </Route>
        <Route exact path="/plants/new">
          <NewPlantForm plants={plants} onAddPlant={addPlant} />
        </Route>
        <Route
          exact
          path="/plants/:id"
          render={({ match }) => (
            <PlantDetail
              plant={plants.find(
                (plant) => plant.id === parseInt(match.params.id)
              )}
              handleDelete={handleDelete}
            />
          )}
        ></Route>
      </Switch>
    </div>
  );
};

export default PlantsContainer;
