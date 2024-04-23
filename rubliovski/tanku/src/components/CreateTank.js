import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const CreateTank = () => {
    const [newName, setName] = useState({name: ''});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setName({...newName, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/tanku', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newName),
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
            <h2>Create Tank</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required={true}
                    value={newName.name}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Create Item</button>
        </form>
    );
};

export default CreateTank;
