import PlantListItem from "./PlantListItem";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const PlantsList = ({ plants, handleDelete }) => {
  return (
    <div className="home-class">
      {Array.from(Array).map((_, index) => (
        <Grid
          key={index}
          container
          direction="row"
          justifyContent="space-evenly"
          margin="10px"
          alignItems="center"
        >
          {plants.map((plant) => (
            <Card key={plant.id} sx={{ maxWidth: 330, margin: "15px" }}>
              <CardMedia
                component="img"
                height="500"
                width="300"
                image={plant.plant_image_url}
                alt="plant"
              />
              <PlantListItem
                key={plant.plant_name}
                plant={plant}
                handleDelete={handleDelete}
              />
            </Card>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default PlantsList;
