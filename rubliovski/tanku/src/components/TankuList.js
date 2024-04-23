import React, {useEffect, useState} from 'react';


const TankuList = () => {
    const [tanku, setTanku] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:3001/tanku')
            .then(response => response.json())
            .then(data => setTanku(data))
            .catch(error => console.error('Error fetching tanku data:', error));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/tanku/${id}`, {method: 'DELETE'})
            .then(() => {
                // After deletion, fetch the updated list
                fetchData();
            })
            .catch(error => console.error('Error deleting item:', error));
    };

    return (
        <div>
            <h2>Tanku List</h2>
            <ul>
                {tanku.length > 0 ? (
                    tanku.map((item) => (
                        <li key={item.id}>
                            {item.name}{' '}
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

export default TankuList;
