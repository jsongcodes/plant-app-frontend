import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function NewUserForm({ addUser, currentUser }) {
  const [id, setId] = useState('');
  const [user_full_name, setUserFullName] = useState("");
  const [username, setUsername] = useState("");
  const [user_image_url, setUserImageUrl] = useState("");
  const [years_of_experience, setYearsOfExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      id,
      user_full_name,
      username,
      user_image_url,
      years_of_experience
    });
  };

  return (
    <Box
      className="home-class"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>new user</h1>
      <div>
        <TextField
          required
          type="text"
          name="user_full_name"
          label="user full name"
          value={user_full_name}
          onChange={(e) => setUserFullName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          type="text"
          name="username"
          label="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          type="text"
          name="user_image_url"
          label="user image url"
          value={user_image_url}
          onChange={(e) => setUserImageUrl(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          type="text"
          name="yearsOfExperience"
          label="years of experience"
          value={years_of_experience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        add user
      </button>
    </Box>
  );
}

export default NewUserForm;
