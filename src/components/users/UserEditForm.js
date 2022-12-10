import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserEditForm = ({user = {}, updateUser}) => {
    const [name, setName] = useState(user.name);
    const [years_of_experience, setYearsOfExperience] = useState(user.years_of_experience);
    
    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        updateUser(id, {
          name,
          years_of_experience
        });
      };

    useEffect(() => {
        setName(user.name);
        setYearsOfExperience(user.years_of_experience)
    }, [user])

    return(
        <>
      <h1>Edit User: {user.name}</h1>
      <form
        onSubmit={handleSubmit}
      >
        <fieldset>
          <label>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label>
            Years of Experience
          </label>
          <input
            type="text"
            name="yearsOfExperience"
            id="yearsOfExperience"
            value={years_of_experience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
          />
        </fieldset>

        <button
          type="submit"
        >
          Update
        </button>
      </form>
    </>
    )
}

export default UserEditForm;