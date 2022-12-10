import NewPlantButton from "./NewPlantButton";
import Link from "@mui/material/Link";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const PlantsToolBar = () => {
  return (
    <div>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/plants"
          >
            all plants
          </Link>
          {/* <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/users/news"
            > */}
          <NewPlantButton /> {/* </Link> */}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default PlantsToolBar;
