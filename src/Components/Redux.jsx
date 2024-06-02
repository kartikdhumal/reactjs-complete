import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearItem, removeItem, updateItem } from '../utils/cartSlice';
import '../styles/Redux.css';

function Redux() {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateValue, setUpdateValue] = useState('');
    const [newItem, setNewItem] = useState('');

    const handleAdd = () => {
        if (newItem.trim() !== '') {
            dispatch(addItem(newItem));
            setNewItem('');
        }
    };

    const handleRemove = (index) => {
        dispatch(removeItem(index));
    };

    const handleUpdate = () => {
        if (updateValue.trim() !== '') {
            dispatch(updateItem({ key: updateIndex, value: updateValue }));
            setUpdateIndex(null);
            setUpdateValue('');
        }
    };

    const handleClear = () => {
        dispatch(clearItem());
    };

    return (
        <div className="container">
            <h1>Cricketer List</h1>
            <div className="input-section">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Enter the name of the cricketer"
                />
                <button onClick={handleAdd}>Add Cricketer</button>
            </div>
            <div className="buttons">
                <button onClick={handleClear}>Clear All</button>
            </div>
            <h1>{Object.keys(cartItems).length > 0 ? 'Total Players : ' + Object.keys(cartItems).length : "No Players"}</h1>
            <ul>
                {Object.entries(cartItems).map(([key, item]) => (
                    <li key={key} className="item">
                        <span>{item}</span>
                        <div>
                            <button onClick={() => setUpdateIndex(key)}>Update</button>
                            <button onClick={() => handleRemove(key)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            {updateIndex !== null && (
                <div className="update-section">
                    <input
                        type="text"
                        value={updateValue}
                        onChange={(e) => setUpdateValue(e.target.value)}
                        placeholder="Enter new value"
                    />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}
        </div>
    );
}

export default Redux;
