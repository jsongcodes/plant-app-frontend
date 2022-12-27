import { useHistory, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserDetail = ({ user = {}, currentUser }) => {
  const { 
    user_full_name, plants } = user;

  const history = useHistory();

  return (
    <div className="home-class">
      <h1>{user_full_name}'s plants</h1>
      <button onClick={() => history.push(`/users/${currentUser}/plants/new`)}>
        add plant
      </button>

      {Array?.from(Array).map((_, index) => (
        <Grid
          key={index}
          container
          direction="row"
          justifyContent="space-evenly"
          margin="10px"
          alignItems="center"
        >
          {plants?.map((plant) => (
            <Card key={plant.id} sx={{ maxWidth: 500, margin: "15px" }}>
              <CardMedia
                component="img"
                height="500"
                width="300"
                image={plant.plant_image_url}
                alt="plant"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Link to={`/users/${currentUser}/plants/${plant.id}`}>{plant.plant_name}</Link>
                </Typography>
                <Typography margin="5px" variant="body2" color="text.secondary">
                  <b>nickname: </b>
                  {plant.plant_nickname}
                </Typography>
                <Typography margin="5px" variant="body2" color="text.secondary">
                  <b>environment:</b> {plant.environment}
                </Typography>
                <Typography margin="5px" variant="body2" color="text.secondary">
                  <b>water level:</b> {plant.water_level}
                </Typography>
                <Typography margin="5px" variant="body2" color="text.secondary">
                  <b>sunlight hours:</b> {plant.sunlight_hours}
                </Typography>
                <Typography margin="5px" variant="body2" color="text.secondary">
                  <b>plant description:</b> {plant.plant_description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default UserDetail;
