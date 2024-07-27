import React, { useState } from 'react';
import './TrainerDetailsForm.css';

const TrainerDetailsForm = () => {
  const [userDetails, setUserDetails] = useState({
    userId: '',
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    languages: ['']
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'languages') {
      const updatedLanguages = [...userDetails.languages];
      updatedLanguages[index] = value;
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        languages: updatedLanguages
      }));
    } else {
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
    }
  };

  const handleAddLanguage = () => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      languages: [...prevDetails.languages, '']
    }));
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = userDetails.languages.filter((_, i) => i !== index);
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      languages: updatedLanguages
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Details Submitted:', userDetails);
  };

  return (
    <div className="container">
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            name="userId"
            value={userDetails.userId}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={userDetails.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Languages:
          {userDetails.languages.map((language, index) => (
            <div key={index} className="language-group">
              <input
                type="text"
                name="languages"
                value={language}
                onChange={(e) => handleChange(e, index)}
              />
              <button type="button" onClick={() => handleRemoveLanguage(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddLanguage}>
            Add Language
          </button>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TrainerDetailsForm;
