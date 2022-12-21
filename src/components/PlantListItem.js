import { Link } from "react-router-dom";
import { ImageListItemBar } from "@mui/material";

const PlantListItem = ({ plant}) => {
  return (
    // <li key={plant.id}>
    <>
      <div>
        <Link to={`/plants/${plant.id}`}>
          <ImageListItemBar title={plant.plant_name} position="below" />
        </Link>
      </div>

    </>
    // </li>
  );
};

export default PlantListItem;
