import { Link } from "react-router-dom";

function NewPlantButton() {
  return (
    <Link
      to="/plants/new"
    >
      New Plant
    </Link>
  );
}

export default NewPlantButton;
