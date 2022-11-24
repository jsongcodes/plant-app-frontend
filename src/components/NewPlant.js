import { useState } from "react";
import { useHistory } from "react-router-dom";


const NewPlant = () => {
    const [inputForm, setInputForm] = useState({
        userName: "",
        plantName: "",
        description: "",
        plantCare: "",
      });

      const history = useHistory();

      const handleChange = (e) => {
        setInputForm({ ...inputForm, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost:9292", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputForm),
        })
          .then((resp) => resp.json())
          .then((data) => onAddPlant(data))
          .then(() => {
            history.push(`/plants`);
          });
      };
    
    return (
        <div className="new-plant">
                 <h2>Add a New Plant</h2>
      <form onSubmit={handleSubmit}>
        <label>user name:</label>
        <textarea
          name="body"
          required
          value={inputForm.userName}
          onChange={handleChange}
        />

        <label>plant name:</label>
        <textarea
          required
          name="plantName"
          value={inputForm.plantName}
          onChange={handleChange}
        />

        <button>Add Plant 📝</button>
      </form> 
        </div>
    )
}

export default NewPlant;