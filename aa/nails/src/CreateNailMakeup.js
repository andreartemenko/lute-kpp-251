import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const CreateNailMakeup = () => {
  const [newNailMakeup, setNewNailMakeup] = useState({name: ''});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewNailMakeup({...newNailMakeup, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/nails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNailMakeup),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        alert('Error creating item: ' + error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Nail Makeup Item</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newNailMakeup.name}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Create Item</button>
    </form>
  );
};

export default CreateNailMakeup;
