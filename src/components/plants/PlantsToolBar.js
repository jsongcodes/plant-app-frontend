import { Link } from "react-router-dom";
import NewPlantButton from "./NewPlantButton";
const PlantsToolBar = () => {
  
  return (
    <div>
          

      <Link to="/plants">
         All Plants
      </Link>
      <div>
        <NewPlantButton />
      </div>
    </div>
  );
};

export default PlantsToolBar;