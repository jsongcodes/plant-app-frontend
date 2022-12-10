import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
// import { ImageListItemBar } from '@mui/material';


const NewPlantForm = ({ onAddPlant }) => {
  const [userIds, setUserIds] = useState([]);
  const [users, setUsers] = useState([]);
  const [inputForm, setInputForm] = useState({
    user: "",
    yearsOfExperience: "",
    description: "",
  });

  useEffect(() => {
    fetch(`http://localhost:9292/plants`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlant({
      user_ids: userIds,
    });
  };

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (event) => {
    const userId = parseInt(event.target.value);
    if (event.target.checked) {
      setUserIds(userIds.concat(userId));
    } else {
      setUserIds(userIds.filter((id) => id !== userId));
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id="outlined-required"
        name="user"
        value={inputForm.user}
        onChange={handleChange}
        label="User Name"
      />
      <TextField
        id="outlined-number"
        label="Years Of Experience"
        type="number"
        name="yearsOfExperience"
        value={inputForm.yearsOfExperience}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div>
        <label>Which plant do you want to write a description about?</label>
        <ImageList variant="woven" cols={3} gap={8}>
          {users.map((user) => (
            <ImageListItem key={user.image_url}>
              <img
                src={`${user.image_url}?w=248&fit=crop&auto=format`}
                srcSet={`${user.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={user.title}
                loading="lazy"
              />
              <input
                type="checkbox"
                id={`user-${user.id}`}
                value={user.id}
                onChange={handleCheckboxChange}
              />
                    {/* <ImageListItemBar position="below" title={user.name} /> */}
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <TextField
        required
        id="outlined-required"
        name="description"
        value={inputForm.description}
        onChange={handleChange}
        label="Description"
      />
      <button>Add Plant</button>
    </Box>
    

    // <div className="form">
    //   <h2>Plants</h2>
    //   <form onSubmit={handleSubmit}>
    //     <fieldset>
    //       <h2>Who are you?</h2>
    //       <textarea
    //         name="user"
    //         required
    //         value={inputForm.user}
    //         onChange={handleChange}
    //       ></textarea>
    //       <h2>How many years have you been taking care of plants?</h2>
    //       <textarea
    //         name="yearsOfExperience"
    //         required
    //         value={inputForm.yearsOfExperience}
    //         onChange={handleChange}
    //       ></textarea>

    //       <h2>Which plant do you want to write a description about?</h2>
    // <label>Plants</label>
    // <div className="grid sm:grid-cols-6 gap-4">
    //   {users?.map((user) => (
    //     <label key={user.id}>
    //       <img src={user.image_url} alt={user.name} title={user.name} />
    //       {user.name}
    //       <input
    //         type="checkbox"
    //         className="hidden"
    //         id={`user-${user.id}`}
    //         value={user.id}
    //         onChange={handleCheckboxChange}
    //       />
    //     </label>
    //   ))}
    // </div>
    //     </fieldset>

    //     <button>Add Plant</button>
    //   </form>
    // </div>
  );
};

export default NewPlantForm;
