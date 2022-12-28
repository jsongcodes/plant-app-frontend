import {
  useHistory,
  useLocation,
  Route,
  Switch,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import NewUserForm from "./NewUserForm";
import UserDetail from "./UserDetail";
import UsersList from "./UsersList";
import NewPlantForm from "./NewPlantForm";
import PlantsList from "./PlantsList";
import PlantDetail from "./PlantDetail";
import PlantEditForm from "./PlantEditForm";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [plants, setPlants] = useState([]);

  const history = useHistory();
  const location = useLocation();


  useEffect(() => {
    fetch(`http://localhost:9292/users`)
      .then((resp) => resp.json())
      .then((users) => {setUsers(users)
      });

    fetch(`http://localhost:9292/plants`)
      .then((resp) => resp.json())
      .then((plants) => setPlants(plants));
  }, []);

  const addUser = (formData) => {
    fetch(`http://localhost:9292/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newUser) => {
        setCurrentUser(newUser.id)
        setUsers([...users, newUser]);
        if (currentUser !== null)
        {history.push(`/users/${currentUser}/plants`);}
      });
  };

  const handleDelete = (plantId) => {
    if (window.confirm("delete?")) {
      fetch(`http://localhost:9292/plants/${plantId}`, {
        method: "DELETE",
      }).then(() => {
        const filteredPlants = plants.filter((plant) => plant.id !== plantId);
        setPlants(filteredPlants);
        if (location.pathname !== "/plants") {
          history.push(`/users/${currentUser}/plants`);
        }
      });
    }
  };

  const addPlant = (formData) => {
    fetch(`http://localhost:9292/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((plant) => {
        setPlants(plants.concat(plant));
        history.push(`/users/${currentUser}/plants/${plant.id}`);
      });
  };

  const updatePlant = (id, formData) => {
    fetch(`http://localhost:9292/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        const updatedArray = plants.map((plant) => {
          if (plant.id === updatedPlant.id) {
            return updatedPlant;
          }
          return plant;
        });
        setPlants(updatedArray);
        history.push(`/users/${currentUser}/plants/${id}`);
      });
  };

  return (
    <>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users/:user_id/plants/new">
          <NewPlantForm
            plants={plants}
            onAddPlant={addPlant}
            setPlants={setPlants}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path="/users">
          <UsersList users={users} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/users/new">
          <NewUserForm setCurrentUser={setCurrentUser} currentUser={currentUser} addUser={addUser} />
        </Route>
        <Route
          exact path="/users/:id/plants"
          render={({ match }) => (
            <UserDetail
              user={users.find((user) => user.id === parseInt(match.params.id))}
              currentUser={currentUser}
            />
          )}
        />
        <Route exact path="/plants">
          <PlantsList plants={plants} handleDelete={handleDelete} />
        </Route>
        <Route
          exact
          path="/users/:user_id/plants/:id"
          render={({ match }) => (
            <PlantDetail
           
              plant={plants.find(
                (plant) => plant.id === parseInt(match.params.id)
              )}
              handleDelete={handleDelete}
              currentUser={currentUser}
            />
          )}
        ></Route>
        <Route
          exact
          path="/users/:user_id/plants/:id/edit"
          render={({ match }) => (
            <PlantEditForm
              plant={plants.find(
                (plant) => plant.id === parseInt(match.params.id)
              )}
              updatePlant={updatePlant}
            />
          )}
        />
      </Switch>
    </>
  );
};

export default App;