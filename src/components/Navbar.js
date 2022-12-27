import Link from "@mui/material/Link";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";

const Navbar = ({currentUser = {}, setCurrentUser} ) => {

  const toggleLogout = () => {
    setCurrentUser(null)
  }


  return (
    <nav className="navbar">
      <Link
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        href="/"
      >
        <h1 className="title">plantparenthood</h1>
      </Link>
      <div className="navbar-links">
        <Breadcrumbs className="navbar-links" aria-label="breadcrumb">
          <Link
            className="navbar-links"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/plants"
          >
            <YardOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            plants
          </Link>

          {currentUser !== null ?
           (<Link
            className="navbar-links"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/users"
            onClick={toggleLogout}
          >
            <PersonOutlineOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            logout
          </Link>)
          :
         (<Link
          className="navbar-links"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/users"
        >
          <PersonOutlineOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          login
        </Link> )
        
          }
          
          <Link
            className="navbar-links"
            sx={{ display: "flex", alignItems: "center" }}
            href="/users/new"
          >
            <PersonOutlineOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            register
          </Link>
        </Breadcrumbs>
      </div>
    </nav>
  );
};

export default Navbar;
