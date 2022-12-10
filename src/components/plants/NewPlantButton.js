import { Link } from "react-router-dom";

function NewPlantButton() {
  return (
    <Link
      to="/plants/new"
    >
      new plant
    </Link>
  );
}

export default NewPlantButton;
