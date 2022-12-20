import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NewPlantForm = ({ id, onAddPlant }) => {
  const [userIds, setUserIds] = useState([]);
  const [users, setUsers] = useState([]);
  const [user_name, setUserName] = useState('');
  const [user_image_url, setUserImageUrl] = useState('');
  const [plant_name, setPlantName] = useState('');
  const [plant_nickname, setPlantNickname] = useState('');
  const [plant_image_url, setPlantImageUrl] = useState('');
  const [environment, setEnvironment] = useState('');
  const [water_level, setWaterLevel] = useState('');
  const [sunlight_hours, setSunlightHours] = useState('');
  const [plant_description, setPlantDescription] = useState('');
  const [city_id, setCityId] = useState(id)

  useEffect(() => {
    fetch(`http://localhost:9292/plants`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlant({
      user_ids: userIds,
      user_name,
      user_image_url,
      plant_name,
      plant_nickname,
      plant_image_url,
      environment,
      water_level,
      sunlight_hours,
      plant_description
    });
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
        value={user_name}
        onChange={(e) => setUserName(e.target.value)}
        label="user name"
      />
      <TextField
        required
        id="outlined-required"
        name="user-image-url"
        value={user_image_url}
        onChange={(e) => setUserImageUrl(e.target.value)}
        label="user image url"
      />
      <TextField
        required
        id="outlined-required"
        name="plant-name"
        value={plant_name}
        onChange={(e) => setPlantName(e.target.value)}
        label="plant name"
      />
      <TextField
        required
        id="outlined-required"
        name="plant-nickname"
        value={plant_nickname}
        onChange={(e) => setPlantNickname(e.target.value)}
        label="plant nickname"
      />
            <TextField
        required
        id="outlined-required"
        name="plant-image-url"
        value={plant_image_url}
        onChange={(e) => setPlantImageUrl(e.target.value)}
        label="plant image url"
      />
            <TextField
        required
        id="outlined-required"
        name="plant-environment"
        value={environment}
        onChange={(e) => setEnvironment(e.target.value)}
        label="environment"
      />
            <TextField
        required
        id="outlined-required"
        name="water-level"
        value={water_level}
        onChange={(e) => setWaterLevel(e.target.value)}
        label="water level"
      />
      <TextField
        id="outlined-number"
        label="number of hours of sunlight"
        type="number"
        name="number of hours of sunlight"
        value={sunlight_hours}
        onChange={(e) => setSunlightHours(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        id="outlined-required"
        name="plant-description"
        value={plant_description}
        onChange={(e) => setPlantDescription(e.target.value)}
        label="plant description"
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
