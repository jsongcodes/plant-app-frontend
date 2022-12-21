import PlantListItem from "./PlantListItem";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
// import { ImageListItemBar } from "@mui/material";

const PlantsList = ({ plants, handleDelete }) => {

  return (    
    <ImageList variant="woven" cols={3} gap={8}>
      {plants.map((plant) => (
        <ImageListItem key={plant.plant_image_url}>
          <img
            src={`${plant.plant_image_url}?w=248&fit=crop&auto=format`}
            srcSet={`${plant.plant_image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={plant.title}
            loading="lazy"
          />
          <PlantListItem
            key={plant.id}
            plant={plant}
            handleDelete={handleDelete}
          />
          
          {/* <ImageListItemBar
            title={plant.title}
            subtitle={<span>by: {plant.author}</span>}
            position="below"
          />           */}
          
        </ImageListItem>

      ))}
    </ImageList>
  );
};

export default PlantsList;
