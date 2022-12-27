import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const PlantEditForm = ({ plant = {}, updatePlant, currentUser }) => {
  const { id } = useParams();

  const [plant_name, setPlantName] = useState("");
  const [plant_nickname, setPlantNickname] = useState("");
  const [plant_image_url, setPlantImageUrl] = useState("");
  const [environment, setEnvironment] = useState("");
  const [water_level, setWaterLevel] = useState("");
  const [sunlight_hours, setSunlightHours] = useState("");
  const [plant_description, setPlantDescription] = useState("");

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
    // set formData to plant
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
        className="home-class"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1>update {plant.plant_name}</h1>
        <div>
          <TextField
            value={plant_name}
            label="plant name"
            onChange={(e) => setPlantName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            value={plant_nickname}
            label="plant nickname"
            onChange={(e) => setPlantNickname(e.target.value)}
          />
        </div>
        <div>
          <TextField
            value={plant_image_url}
            label="plant image url"
            onChange={(e) => setPlantImageUrl(e.target.value)}
          />
        </div>
        <div>
          <TextField
            value={environment}
            label="environment"
            onChange={(e) => setEnvironment(e.target.value)}
          />
        </div>
        <div>
          <TextField
            value={water_level}
            label="water level"
            onChange={(e) => setWaterLevel(e.target.value)}
          />
        </div>
        <div>
          <TextField
            value={sunlight_hours}
            label="sunlight hours"
            onChange={(e) => setSunlightHours(e.target.value)}
          />
        </div>
        <div>
          <TextField
            value={plant_description}
            label="plant description"
            onChange={(e) => setPlantDescription(e.target.value)}
          />
        </div>
        <button type="submit">update plant</button>
      </Box>
    </>
  );
};

export default PlantEditForm;
