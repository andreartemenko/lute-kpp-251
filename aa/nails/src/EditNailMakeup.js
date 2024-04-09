import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const EditNailMakeup = () => {
  const {id} = useParams();
  const [nailMakeup, setNailMakeup] = useState({name: ''});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/nails/${id}`)
      .then(response => response.json())
      .then(data => {
        setNailMakeup(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setNailMakeup({...nailMakeup, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/nails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nailMakeup),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        alert('Error updating item: ' + error.message);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Nail Makeup Item</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={nailMakeup.name}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Update Item</button>
    </form>
  );
};

export default EditNailMakeup;
