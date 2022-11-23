import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/newplant");
      };

    return (
<div className="home-class">
      <h2>Need help taking care of your houseplant?</h2>

      <button className="home-class" onClick={handleClick}>
        Find out how 📝
      </button>
    </div>
    )
}

export default Home;