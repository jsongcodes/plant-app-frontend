import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import UsersToolBar from './UsersToolBar';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import UserDetail from './UserDetail';
import UserEditForm from './UserEditForm';

function UsersContainer() {
  const history = useHistory();
  const location = useLocation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(`http://localhost:9292/users`, {
        headers: { Accept: 'application/json' }
      });

      const parsedBody = await res.json();

      setUsers(parsedBody);
    }

    fetchUsers();
  }, []);

  
  const addUser = (formData) => {
    fetch(`https://localhost:9292/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newUser => {
        setUsers(users.concat(newUser))
        history.push(`/${newUser.id}`)
      });
  }
  

  const updateUser = (id, formData) => {
    fetch(`https://localhost:9292/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json()) 
      .then(updatedUser => {
        setUsers(users.map((user) => (user.id === parseInt(id) ? updatedUser : user)));
        history.push(`/${updatedUser.id}`);
      })
  }

  const deleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      // optimistically update the ui
      setUsers(users.filter(user => user.id !== parseInt(userId)))
      // update the API
      fetch(`https://localhost:9292/users/${userId}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' }
      })
        .then(res => res.json())
        .then(deletedUser => {
          console.log('deleted', deletedUser.name)
          if (location.pathname !== "/users") {
            history.push("/users")
          }
        });
    }
  }

  return (
    <div className="w-4/5 mx-auto pt-12">
      <UsersToolBar />
      <Switch>
        <Route exact path="/users">
          <UsersList users={users} deleteUser={deleteUser} />
        </Route>
        <Route exact path="/users/new">
          <NewUserForm users={users} addUser={addUser} />
        </Route>
        <Route
          exact
          path="/users/:id"
          render={({ match }) => (
            <UserDetail
              deleteUser={deleteUser}
              user={users.find((user) => user.id === parseInt(match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/users/:id/edit"
          render={({ match }) => (
            <UserEditForm
              user={users.find((user) => user.id === parseInt(match.params.id))}
              updateUser={updateUser}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default UsersContainer;