import { useState } from "react";

const NewPlant = () => {
    const [inputForm, setInputForm] = useState({
        userName: "",
        plantName: "",
        description: "",
        plantCare: "",
      });
    
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