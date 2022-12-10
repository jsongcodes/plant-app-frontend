import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import UserListItem from "./UserListItem";
import Grid from "@mui/material/Grid"; // Grid version 1

const UsersList = ({ users, deleteUser }) => {
  return (
    <div>

        {Array.from(Array).map((_, index) => (
          <Grid key={index}   
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          >
            {users.map((user) => (
              <Card key={user.id} sx={{ maxWidth: 400 }} 
              >
                <CardMedia
                  component="img"
                  height="280"
                  image="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwcGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                  alt="user"

                />
                <UserListItem
                  key={user.id}
                  user={user}
                  deleteUser={deleteUser}
                />
              </Card>
            ))}
          </Grid>
        ))}
    </div>
  );
};

export default UsersList;
