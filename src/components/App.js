import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";


import Navbar from "./Navbar";

import NewUserForm from "./NewUserForm";
import UserDetail from "./UserDetail";
import UsersList from "./UsersList";

import PlantsContainer from "./PlantsContainer";

import NewPlantForm from "./NewPlantForm";
import PlantsList from "./PlantsList";
// import PlantsToolBar from "./PlantsToolBar";
import PlantDetail from "./PlantDetail";
import PlantEditForm from "./PlantEditForm"
import { useParams, useLocation } from "react-router-dom";

const App = () => {
  const history = useHistory();

  // const { id } = useParams();

  
  const [users, setUsers] = useState([]);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/users`)
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
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
        setUsers([...users, newUser])
        console.log("history:", history)
        console.log("newUser.id:", newUser.id);
        // Navigate to=`/users/${newUser.id}`;
        history.push(`/users/${newUser.id}`);

      });
  };


  useEffect(() => {
    fetch(`http://localhost:9292/plants`)
      .then((resp) => resp.json())
      .then((plants) => setPlants(plants));
  }, []);

  // const location = useLocation();
  // const { id } = useParams();



  const handleDelete = (plantId) => {
    if (window.confirm("delete?")) {
      fetch(`http://localhost:9292/plants/${plantId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deletedPlant) => {
          setPlants(plants.filter((plant) => plant.id !== deletedPlant.id));
          // if (location.pathname !== "/plants") {
          //   history.push("/plants");
          // }
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
        history.push(`/plants/${plant.id}`);
      });
  };

  const updatePlant = (id, formData) => {
    fetch(`http://localhost:9292/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json()) 
      .then(updatedPlant => {
        // pessimistically update the plant in state after we get a response from the api
        setPlants(plants.map((plant) => (plant.id === parseInt(id) ? updatedPlant : plant)));
        history.push(`/plants/${updatedPlant.id}`);
      })
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/users">
          <UsersList users={users} />
        </Route>

        <Route exact path="/users/new">
          <NewUserForm addUser={addUser} />
        </Route>
        <Route
          exact
          path="/users/:id"
          render={({ match }) => (
            <UserDetail
           
              user={users.find((user) => user.id === parseInt(match.params.id))}
            />
          )}
        />

        {/* <Route exact path="/plants">
          <PlantsContainer
            plants={plants}
            setPlants={setPlants}
            users={users}
            setUsers={setUsers}
          />
        </Route> */}

        <Route exact path="/plants">
          <PlantsList plants={plants} handleDelete={handleDelete} />
        </Route>
        <Route exact path="/plants/new">
          <NewPlantForm
          // id={id}
          plants={plants} onAddPlant={addPlant} setPlants={setPlants}/>
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
        <Route
          exact
          path="/plants/:id/edit"
          render={({ match }) => (
            <PlantEditForm
              plant={plants.find((plant) => plant.id === parseInt(match.params.id))}
              updatePlant={updatePlant}
              // id={id}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;