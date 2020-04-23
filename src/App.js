import React, { useState } from 'react';
import './App.css';

const MyName = () => {
  const [name, setName] = useState('')

  const handleChange = (evt) => {
    setName(evt.target.value)
  }
  return (
    <div>
      <h1>My Name is : {name} </h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
export default MyName;
