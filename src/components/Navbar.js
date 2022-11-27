import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>Plantcare 101</h1>
        </Link>
        <div className="links">
          {/* <Link to="/newplant">New Plant</Link>
          <Link to="/plants">Plants</Link> */}
          <Link to="/login"><img src="https://img.icons8.com/material-outlined/24/null/user-male-circle.png" alt="login"/>
          </Link>

          <Link to="/search"><img src="https://img.icons8.com/android/22/null/search.png" alt="search"/>
          </Link>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
