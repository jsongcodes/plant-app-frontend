import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const PlantEditForm = ({ plant = {}, updatePlant, id }) => {
  const [plant_name, setPlantName] = useState(plant.plant_name);
  const [plant_nickname, setPlantNickname] = useState(plant.plant_nickname);
  const [plant_image_url, setPlantImageUrl] = useState(plant.plant_image_url);
  const [environment, setEnvironment] = useState(plant.plant_environment);
  const [water_level, setWaterLevel] = useState(plant.water_level);
  const [sunlight_hours, setSunlightHours] = useState(plant.sunlight_hours);
  const [plant_description, setPlantDescription] = useState(
    plant.plant_description
  );

  // const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePlant(id, {
      plant_name,
      plant_nickname,
      plant_image_url,
      environment,
      water_level,
      sunlight_hours,
      plant_description,
    });
  };

  useEffect(() => {
    setPlantName(plant.plant_name);
    setPlantNickname(plant.plant_nickname);
    setPlantImageUrl(plant.plant_image_url);
    setEnvironment(plant.environment);
    setWaterLevel(plant.water_level);
    setSunlightHours(plant.sunlight_hours);
    setPlantDescription(plant.plant_description);
  }, [plant]);

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>Edit User: {plant.plant_name}</h1>
        <TextField
          required
          // type="text"
          name="plant_name"
          id="plant_name"
          // label="plant name"
          value={plant_name}
          onChange={(e) => setPlantName(e.target.value)}
        />
        <TextField
          required
          // type="text"
          name="plant_nickname"
          id="plant_nickname"
          // label="plant nickname"
          value={plant_nickname}
          onChange={(e) => setPlantNickname(e.target.value)}
        />
        <TextField
          required
          // type="text"
          name="plant_image_url"
          id="plant_image_url"
          // label="plant image url"
          value={plant_image_url}
          onChange={(e) => setPlantImageUrl(e.target.value)}
        />
        <TextField
          required
          // type="text"
          name="environment"
          id="environment"
          // label="environment"
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
        />

        <TextField
          required
          // type="text"
          name="water_level"
          id="water_level"
          // label="environment"
          value={water_level}
          onChange={(e) => setWaterLevel(e.target.value)}
        />
        <TextField
          required
          // type="text"
          name="sunlight_hours"
          id="sunlight_hours"
          // label="sunlight_hours"
          value={sunlight_hours}
          onChange={(e) => setSunlightHours(e.target.value)}
        />
        <TextField
          required
          // type="text"
          name="plant_description"
          id="plant_description"
          // label="plant_description"
          value={plant_description}
          onChange={(e) => setPlantDescription(e.target.value)}
        />
        <button type="submit">update plant</button>
      </Box>
    </>
  );
};

export default PlantEditForm;
