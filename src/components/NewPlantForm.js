import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NewPlantForm = ({ onAddPlant, setPlants, currentUser }) => {
  const [plant_name, setPlantName] = useState("");
  const [plant_nickname, setPlantNickname] = useState("");
  const [plant_image_url, setPlantImageUrl] = useState("");
  const [environment, setEnvironment] = useState("");
  const [water_level, setWaterLevel] = useState("");
  const [sunlight_hours, setSunlightHours] = useState("");
  const [plant_description, setPlantDescription] = useState("");

  //form container that either sets state with empty, or have all that information pre populated. depending on who is calling it, it will render with the info or not. put all of state inside of that container. BONUS.

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlant({
      user_id: currentUser,
      plant_name,
      plant_nickname,
      plant_image_url,
      environment,
      water_level,
      sunlight_hours,
      plant_description,
    });
  };

  return (
    <Box
      component="form"
      className="home-class"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          name="plant-name"
          value={plant_name}
          onChange={(e) => setPlantName(e.target.value)}
          label="plant name"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          name="plant-nickname"
          value={plant_nickname}
          onChange={(e) => setPlantNickname(e.target.value)}
          label="plant nickname"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          name="plant-image-url"
          value={plant_image_url}
          onChange={(e) => setPlantImageUrl(e.target.value)}
          label="plant image url"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          name="plant-environment"
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
          label="environment"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          name="water-level"
          value={water_level}
          onChange={(e) => setWaterLevel(e.target.value)}
          label="water level"
        />
      </div>
      <div>
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
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          name="plant-description"
          value={plant_description}
          onChange={(e) => setPlantDescription(e.target.value)}
          label="plant description"
        />
      </div>
      <button>add plant</button>
    </Box>
  );
};

export default NewPlantForm;
