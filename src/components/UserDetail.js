import { useHistory } from "react-router-dom";
import { ImageListItem } from "@mui/material";
import { ImageList } from "@mui/material";
import PlantListItem from "./PlantListItem";

import Link from "@mui/material/Link";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const UserDetail = ({ user = {} }) => {
  const {
    id,
    user_full_name,
    username,
    user_image_url,
    years_of_experience,
    plants,
  } = user;

  const history = useHistory();

  return (
    <div>
      <h1>{user_full_name}'s plants</h1>
      <p>{username}</p>
      <ImageList variant="woven" cols={3} gap={8}>
        {plants.map((plant) => (
          <ImageListItem key={plant.plant_image_url}>
            <img
              src={`${plant.plant_image_url}?w=248&fit=crop&auto=format`}
              srcSet={`${plant.plant_image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={plant.title}
              loading="lazy"
            />
            <PlantListItem key={plant.id} plant={plant} />
          </ImageListItem>
        ))}
      </ImageList>

      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/plants/new"
        >
          new plant
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default UserDetail;
