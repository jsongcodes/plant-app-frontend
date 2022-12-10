import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>Plantcare 101</h1>
        </Link>
        <div className="links">
          <Link to="/users">Users
          </Link>
          <Link to="/plants">Plants
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
