import Link from "@mui/material/Link";
import NewUserButton from './NewUserButton';
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const UsersToolBar = () => {
    return (
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/users"
            >
              all users
            </Link>
            {/* <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/users/news"
            > */}
              <NewUserButton />
            {/* </Link> */}
            
            
          </Breadcrumbs>
        </div>
      );
    }

export default UsersToolBar;