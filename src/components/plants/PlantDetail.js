function PlantDetail({ plant = {}, handleDelete }) {
  const { id } = plant;

  return (
    <div>
      <button onClick={() => handleDelete(id)}>Trash</button>

      <ul>
        {plant.map((plant) => (
          <li key={plant.id}>
            <span>
              <img src={plant.image_url} alt={plant.plant_name} />
              {plant.plant_name}
              
            </span>
            <span></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlantDetail;
