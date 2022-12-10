import { Link } from "react-router-dom";
import { ImageListItemBar } from "@mui/material";

const PlantListItem = ({ plant, handleDelete }) => {
  return (
    // <li key={plant.id}>
    <>
      <div>
        <Link to={`/plants/${plant.id}`}>
          <ImageListItemBar title={plant.plant_name} position="below" />
          {/* <img src={plant.image_url} alt={plant.plant_name} /> */}
        </Link>
      </div>
      <span>
        <button onClick={() => handleDelete(plant.id)}>Delete</button>
      </span>
    </>
    // </li>
  );
};

export default PlantListItem;
