// import { Link } from "react-router-dom";
import Link from "@mui/material/Link";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import YardOutlinedIcon from "@mui/icons-material/YardOutlined";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <h1>Plantcare 101</h1>
        </Link>
        
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            {/* <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/plants"
            >
              <YardOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              plants
            </Link> */}
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/users"
            >
              <PersonOutlineOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              login
            </Link>
          </Breadcrumbs>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
