import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function NewUserForm({ addUser }) {
  const [user_full_name, setUserFullName] = useState("");
  const [username, setUsername] = useState("");
  const [user_image_url, setUserImageUrl] = useState("");
  const [years_of_experience, setYearsOfExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ user_full_name, username, user_image_url, years_of_experience });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>new user</h1>
      <TextField
        required
        type="text"
        name="user_full_name"
        label="user full name"
        value={user_full_name}
        onChange={(e) => setUserFullName(e.target.value)}
      />
      <TextField
        required
        type="text"
        name="username"
        label="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        required
        type="text"
        name="user_image_url"
        label="user image url"
        value={user_image_url}
        onChange={(e) => setUserImageUrl(e.target.value)}
      />
      <TextField
        required
        type="text"
        name="yearsOfExperience"
        label="years of experience"
        value={years_of_experience}
        onChange={(e) => setYearsOfExperience(e.target.value)}
      />
      <button type="submit"
            onClick={handleSubmit}>Add User</button>
    </Box>
  );
}

export default NewUserForm;







// class UsersController < ApplicationController
//     set :default_content_type, 'application/json'
    
//     # works
//     get '/users' do
//         all_users
//       end

//     #   works
//     get '/users/:id' do
//         find_user
//         @user.to_json(include: :plants)
//     end

//     get '/users/:id/plants' do
//         find_user
//         @user.to_json(include: :plants)
//     end


//     post "/users" do
//         user = User.create(
//             user_full_name: params[:user_full_name],
//             username: params[:username],
//             user_image_url: params[:user_image_url],
//             years_of_experience: params[:years_of_experience]
//         ).to_json
//         # all_users
//     end

//     private

//     def find_user
//       @user = User.find(params[:id])
//     end
  
//     def all_users
//       users = User.all
//       users.to_json(include: :plants)
//     end
    


//     # post "/users" do
//     #     User.create(user_params).to_json
//     # end
    
//     # def user_params
//     #     # allowed_params = %w(user_full_name, username, user_image_url, years_of_experience)
//     #     allowed_params = ["user_full_name", "username", "user_image_url", "years_of_experience"]
//     #     puts "allowed_params:", allowed_params
//     #     params.select {|param,value| allowed_params.include?(param)}
//     # end







//     # patch "/users/:id" do 
//     #     user = User.find(params[:id])
//     #     user.update(user_params)
//     #     user.to_json
//     # end
    
//     # delete '/users/:id' do
//     #     user = User.find(params[:id])
//     #     user.destroy
//     #     user.to_json
//     # end

// end





// import { Link, useHistory } from "react-router-dom";
// import { ImageListItem } from "@mui/material";
// import { ImageList } from "@mui/material";
// import PlantListItem from "./PlantListItem";

// const UserDetail = ({ user = {} }) => {
//   const {
//     id,
//     user_full_name,
//     username,
//     user_image_url,
//     years_of_experience,
//     plants,
//   } = user;

//   const history = useHistory();

//   return (
//     <div>
//       <h1>{user_full_name}'s plants</h1>
//       <p>{username}</p>
      {/* <ImageList variant="woven" cols={3} gap={8}>
      
      {plants.map((plant) => (
        <ImageListItem key={plant.plant_image_url}>
          <img
            src={`${plant.plant_image_url}?w=248&fit=crop&auto=format`}
            srcSet={`${plant.plant_image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={plant.title}
            loading="lazy"
          />
          <PlantListItem
            key={plant.id}
            plant={plant}
          />
          
        </ImageListItem>

      ))}
    </ImageList> */}
      {/* <button onClick={() => history.push('/plants')}>
        go to my plants
      </button>
    </div>
  );
};

export default UserDetail; */}








