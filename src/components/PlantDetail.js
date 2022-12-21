import { useHistory } from "react-router-dom";

function PlantDetail({ plant = {}, handleDelete }) {
  const { id, plant_name, plant_nickname, plant_image_url, environment, water_level, sunlight_hours, plant_description } = plant;

  const history = useHistory();

  return (
    <div>
      <button onClick={() => 
        handleDelete(id)
        }>Trash</button>
      <button 
      onClick={() => history.push(`/plants/${id}/edit`)}
      >edit</button>
      <ul>
        {plant_name}
        <img src={plant.plant_image_url} alt={plant.plant_name} />
        <div>plant nickname: {plant_nickname}</div>
        <div>environment: {environment}</div>
        <div>water level: {water_level}</div>
        <div>sunlight hours: {sunlight_hours}</div>
        <div>plant description: {plant_description}</div>

      </ul>
    </div>
  );
}

export default PlantDetail;
