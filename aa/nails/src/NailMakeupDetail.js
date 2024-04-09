import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

const NailMakeupDetail = () => {
  const {id} = useParams();

  const [nailMakeup, setNailMakeup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/nails/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNailMakeup(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!nailMakeup) return <div>No item found</div>;

  return (
    <div>
      <h2>Nail Makeup Details</h2>
      <p><strong>Name:</strong> {nailMakeup.name}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default NailMakeupDetail;
