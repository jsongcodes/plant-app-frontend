import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PlantListItem = ({ plant: {id, plant_name} }) => {
  return (
    <div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/plants/${id}`}>{plant_name}</Link>
        </Typography>
      </CardContent>
    </div>
  );
};

export default PlantListItem;
