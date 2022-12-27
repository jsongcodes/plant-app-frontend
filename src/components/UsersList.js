import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import UserListItem from "./UserListItem";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";

const UsersList = ({ users, currentUser, setCurrentUser}) => {

  const history = useHistory();

  return (
    <div className="home-class">
      <h2>Who are you?</h2>
      <button
      onClick={() => {
        history.push("/users/new");
      }}>add user</button>

      {Array.from(Array).map((_, index) => (
        <Grid
          key={index}
          container
          direction="row"
          justifyContent="space-evenly"
          margin="10px"
          alignItems="center"
        >
          {users.map((user) => (
            <Card key={user.id} sx={{ maxWidth: 330, margin:"15px" }}>
              <CardMedia
                component="img"
                height="500"
                width="300"
                image={user.user_image_url}
                alt="user"

              />
              <UserListItem
                key={user.id}
                user={user}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Card>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default UsersList;
