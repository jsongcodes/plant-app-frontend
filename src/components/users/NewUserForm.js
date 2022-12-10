import React, { useState } from 'react';

function NewUserForm({ addUser }) {
  const [name, setName] = useState('Jasmin');
  const [yearsOfExperience, setYearsOfExperience] = useState('1');

  const handleSubmit = async (e) => {
    e.preventDefault();

    addUser({
      name,
      yearsOfExperience
    })
  };

  return (
    <>
      <h1>new user</h1>
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
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
          />
        </fieldset>

        <button
          type="submit"
        >
          Add User
        </button>
      </form>
    </>
  );
}

export default NewUserForm;