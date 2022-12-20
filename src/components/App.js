import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";

import NewUserForm from "./NewUserForm";
import UserDetail from "./UserDetail";
import UsersList from "./UsersList";

import PlantsContainer from "./PlantsContainer";

const App = () => {
  const history = useHistory();
  
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
        setUsers(users.concat(newUser));
        console.log(newUser.id)
        history.push(`/users/${newUser.id}`);
      });
  };


  // useEffect(() => {
  //   fetch(`http://localhost:9292/plants`)
  //     .then((resp) => resp.json())
  //     .then((plants) => setPlants(plants));
  // }, []);

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

        <Route exact path="/plants">
          <PlantsContainer
            plants={plants}
            setPlants={setPlants}
            users={users}
            setUsers={setUsers}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;