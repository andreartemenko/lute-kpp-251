import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const NailsMakeupList = () => {
  const [nailMakeups, setNailMakeups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/nails')
      .then(response => response.json())
      .then(data => setNailMakeups(data))
      .catch(error => console.error('Error fetching nail makeup data:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/nails/${id}`, {method: 'DELETE'})
      .then(() => {
        // After deletion, fetch the updated list
        fetchData();
      })
      .then(() => navigate('/'))
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div>
      <h2>Nail Makeup List</h2>
      <ul>
        {nailMakeups.length > 0 ? (
          nailMakeups.map((item) => (
            <li key={item.id}>
              {item.name}{' '}
              <Link to={`/nail/${item.id}`}>View</Link>
              {' | '}
              <Link to={`/edit/${item.id}`}>Edit</Link>
              {' | '}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default NailsMakeupList;
