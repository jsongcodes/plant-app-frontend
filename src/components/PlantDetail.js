import { useHistory, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PlantDetail = ({ currentUser, plant = {}, handleDelete }) => {
  const {
    id,
    plant_name,
    plant_nickname,
    plant_image_url,
    environment,
    water_level,
    sunlight_hours,
    plant_description,
  } = plant;

  const history = useHistory();

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
          <Card key={plant.id} sx={{ maxWidth: 600, margin: "15px" }}>
            <button onClick={() => handleDelete(id)}>delete</button>
            <button onClick={() => history.push(`/users/${currentUser}/plants/${id}/edit`)}>
              edit
            </button>
            <CardMedia
              component="img"
              height="500"
              width="300"
              image={plant_image_url}
              alt={plant.plant_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link to={`/users/${currentUser}/plants/${plant.id}`}>{plant_name}</Link>
              </Typography>
              <Typography margin="5px" variant="body2" color="text.secondary">
              <b>plant nickname:</b> {plant_nickname}
              </Typography>
              <Typography margin="5px" variant="body2" color="text.secondary">
              <b>environment:</b> {environment}
              </Typography>
              <Typography margin="5px" variant="body2" color="text.secondary">
              <b>water level:</b> {water_level}
              </Typography>
              <Typography margin="5px" variant="body2" color="text.secondary">
              <b>sunlight hours:</b> {sunlight_hours}
              </Typography>
              <Typography margin="5px" variant="body2" color="text.secondary">
              <b>plant description:</b> {plant_description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
};

export default PlantDetail;
