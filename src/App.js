import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

//problem is you cannot have multiple hooks :-/


let value

function useState(initialState) {
  if (typeof value === 'undefined') {
    value = initialState
  }

  function setState(nextValue) {
    console.log(nextValue)
    value = nextValue
    ReactDOM.render(<MyName />, document.getElementById('root'))
  }
  console.log(value)
  return [value, setState]
}

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
